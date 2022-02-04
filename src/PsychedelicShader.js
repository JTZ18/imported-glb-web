import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import guid from 'short-uuid'
import glsl from 'babel-plugin-glsl/macro'

// This shader is from Bruno Simons Threejs-Journey: https://threejs-journey.xyz
class PsychedelicShader extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: glsl`
        uniform float time;
        varying vec2 vUv;
        varying float vTime;
        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPosition = projectionMatrix * viewPosition;
          gl_Position = projectionPosition;
          vUv = uv;
          vTime = time;
        }
      `,
      fragmentShader: glsl`
        #ifdef GL_ES
        precision mediump float;
        #endif

        uniform vec2 iResolution;
        uniform float time;

        varying vec2 vUv;
        varying float vTime;

        const mat2 m = mat2( 0.80,  0.60, -0.60,  0.80 );

        float noise( vec2 p )
        {
          return sin(p.x)*sin(p.y);
        }

        float fbm4( vec2 p )
        {
            float f = 0.0;
            f += 0.5000*noise( p ); p = m*p*2.02;
            f += 0.2500*noise( p ); p = m*p*2.03;
            f += 0.1250*noise( p ); p = m*p*2.01;
            f += 0.0625*noise( p );
            return f/0.9375;
        }

        float fbm6( vec2 p )
        {
            float f = 0.0;
            f += 0.500000*(0.5+0.5*noise( p )); p = m*p*2.02;
            f += 0.250000*(0.5+0.5*noise( p )); p = m*p*2.03;
            f += 0.125000*(0.5+0.5*noise( p )); p = m*p*2.01;
            f += 0.062500*(0.5+0.5*noise( p )); p = m*p*2.04;
            f += 0.031250*(0.5+0.5*noise( p )); p = m*p*2.01;
            f += 0.015625*(0.5+0.5*noise( p ));
            return f/0.96875;
        }

        vec2 fbm4_2( vec2 p )
        {
            return vec2(fbm4(p), fbm4(p+vec2(7.8)));
        }

        vec2 fbm6_2( vec2 p )
        {
            return vec2(fbm6(p+vec2(16.8)), fbm6(p+vec2(11.5)));
        }


        float func( vec2 q, out vec4 ron )
        {
            q += 0.03*sin( vec2(0.27,0.23)*time + length(q)*vec2(4.1,4.3));

          vec2 o = fbm4_2( 0.9*q );

            o += 0.04*sin( vec2(0.12,0.14)*time + length(o));

            vec2 n = fbm6_2( 3.0*o );

          ron = vec4( o, n );

            float f = 0.5 + 0.5*fbm4( 1.8*q + 6.0*n );

            return mix( f, f*f*f*3.5, f*abs(n.x) );
        }

        void main() 
        {
            // vec2 p = (2.0*vUv-iResolution.xy)/iResolution.y;
            vec2 p = -1.0 + 3.0 *vUv;
            float e = 2.0;

            vec4 on = vec4(0.0);
            float f = func(p, on);

            vec3 col = vec3(0.0);
            col = mix( vec3(0.2,0.1,0.4), vec3(0.3,0.05,0.05), f );
            col = mix( col, vec3(1,0.98,0.98), dot(on.zw,on.zw) );
            col = mix( col, vec3(0.73,0.1,0.32), 0.2 + 0.5*on.y*on.y );
            col = mix( col, vec3(0.09,0.26,0.1), 0.5*smoothstep(1.2,1.3,abs(on.z)+abs(on.w)) );
            col = clamp( col*f*2.0, 0.0, 1.0 );
            

            // manual derivatives - better quality, but slower
            vec4 kk;
          vec3 nor = normalize( vec3( func(p+vec2(e,0.0),kk)-f, 
                                        2.0*e,
                                        func(p+vec2(0.0,e),kk)-f ) );
            
            gl_FragColor = vec4( col, 1.0 );
        }
`
    })
  }

  set time(v) { this.uniforms.time.value = v } // prettier-ignore
  get time() { return this.uniforms.time.value } // prettier-ignore
}

// This is the 🔑 that HMR will renew if this file is edited
// It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
PsychedelicShader.key = guid.generate()
// Make the material available in JSX as <psychedelic />
extend({ PsychedelicShader })

export { PsychedelicShader }