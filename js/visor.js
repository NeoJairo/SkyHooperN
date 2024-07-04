import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { GlitchPass } from "three/addons/postprocessing/GlitchPass.js";

import { ShaderPass } from "https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/postprocessing/ShaderPass.js";
import CameraControls from "https://cdn.jsdelivr.net/npm/camera-controls@1.32.2/dist/camera-controls.module.js";


import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { KTX2Loader } from "three/addons/loaders/KTX2Loader.js";

import { UnrealBloomPass } from "../node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { FXAAShader } from "../node_modules/three/examples/jsm/shaders/FXAAShader.js";
import { VignetteShader } from "../node_modules/three/examples/jsm/shaders/VignetteShader.js";
import { HorizontalBlurShader } from "../node_modules/three/examples/jsm/shaders/HorizontalBlurShader.js";
import { VerticalBlurShader } from "../node_modules/three/examples/jsm/shaders/VerticalBlurShader.js";


let scene1, camera, renderer, mixer, clock, composer, cameraControls, animation, tiempoTranscurrido, startTime, duracionEnSegundos, anim, anim2,tiempoRelativo = false,tiempoRelativo2 = false;

renderer = new THREE.WebGLRenderer();

CameraControls.install({ THREE: THREE });

var startAnimation = false;

renderer.shadowMap.enabled = true;

let animating = false;
let scrolling = false;
let lastScrollY = window.scrollY;
let scrollDirection = 0;
let animationDuration = 0;
let lastAnimationTime = 0;
let TotalHeight = 0;
var Totalduration = 0;
animating = false;
var animating2 = animating;

function Player() {
  this.carMode = false;
  this.droneMode = false;
  this.mapMode = true;
  this.currentDiapositiva = 0;
  this.animationStack;
  this.startTime = 0;
  this.mapModef = function(){
      if(this.mapMode){

      }else{
        this.carMode= false;
        this.droneMode= false;
        this.mapMode= true;
      }
  };
  this.droneModef = function(){
    if(this.droneMode){

    }else{
      this.carMode= false;
      this.droneMode= true;
      this.mapMode= false;
    }
};
this.carModef = function(){
  if(this.carMode){

  }else{
    this.carMode= true;
    this.droneMode= false;
    this.mapMode= false;
  }
};
  this.getLastPostion = function () {
    return console.log(this.lastPosition, this.lastQuaternion);
  };

  this.getWorldPosition = function () {
    const camPosition = new THREE.Vector3();
    console.log(camera.position);
    return camera.position;
  };

  this.getWorldQuaternion = function () {
    console.log(camera.quaternion);
    return camera.quaternion;
  };

  this.setStartTime = function (dato) {
    this.startTime = dato;
    //console.log("dato correcto",this.startTime);
  };

  this.showAnimationStack = function () {
    if (this.animationStack != undefined) {
      //console.log(this.animationStack);
    }
  };
}
window.player = new Player();

/*   TODO ESTO ES MIERDA  / REFACTOR PORFAVOR (JAIRO/ALEJANDRO)     */

async function init() {
  renderer = new THREE.WebGLRenderer({ alpha: true });
  if (!renderer) {
    //console.error("Error al crear el renderizador.");
  } else {
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Verificar que el renderizador esté inicializado correctamente
    if (renderer.domElement) {
      document
        .getElementById("canvas-container")
        .appendChild(renderer.domElement);
    } else {
      console.error("El renderizador no está inicializado correctamente.");
    }
  }

  // Crear la escena
  scene1 = new THREE.Scene();
  scene1.fog = new THREE.Fog(0xefd1b5, 250 * 2, 600 * 2);
  // Configurar la cámara
  scene1.background = new THREE.Color(0xffffff); // Establecer el color de fondo blanco

  // Agregar una cámara y luces (opcional)
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.set(0, 0, 100);
  scene1.add(camera);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene1.add(ambientLight);

  // Establecer los valores de near y far de la cámara para que coincidan con Blender
  const clipStart = 0.01; // Valor de clipStart en Blender
  const clipEnd = 10000000; // Valor de clipEnd en Blender
  camera.near = clipStart;
  camera.far = clipEnd;
  camera.fov = 45; // Campo de visión de la cámara
  camera.updateProjectionMatrix();

  // Actualizar la matriz de proyección de la cámara

  // Cargar el modelo GLB  animación
  document.getElementById("loading-screen").style.display = "block";
  await loadHeavyModelInBackground();
  // Inicializar el reloj para la animación
  clock = new THREE.Clock();

  // Función para manejar el evento de scroll
  function onScroll(event) {
    // Obtener la altura total de la página
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    TotalHeight = totalHeight;
    // Obtener la posición actual del scroll
    const scrollPosition = window.scrollY;
    // Calcular el progreso de la animación basado en la posición de desplazamiento
    let animationProgress = scrollPosition / totalHeight;

    // Ajustar el progreso de la animación para que esté en el rango de 0 a 1
    animationProgress = Math.max(0, Math.min(1, animationProgress));

    // Obtener la duración total de la animación
    const totalDuration = mixer._actions[0].getClip().duration;
    Totalduration = totalDuration;

    // Calcular el tiempo de la animación basado en el progreso y la duración total
    let animationTime = animationProgress * totalDuration;

    // Ajustar el tiempo de la animación según la dirección del scroll
    if (scrollDirection === -1) {
      // Scroll hacia arriba: ajustar el tiempo de la animación
      mixer.setTime(totalDuration - animationTime);
    } else {
      // Scroll hacia abajo: ajustar el tiempo de la animación
      mixer.setTime(animationTime);
    }

    if (!animating) {
      animating = true;
      //console.log("animado");
      document.getElementById("textLoading").innerHTML = "100% loaded";
      document.getElementById("loading-screen").style.display = "none";

      animate();
    }
  }

  // Función para manejar el evento de parada de scroll
  function onScrollStop() {
    // Marcar que no hay movimiento de scroll vertical
    scrolling = false;
  }

  // Variable para indicar si hay movimiento de scroll vertical

  // Event listener para el movimiento de scroll
  window.addEventListener("scroll", onScroll);

  // Event listener para detectar cuando se detiene el scroll
  window.addEventListener("scroll", onScrollStop);
}
function calcularTiempoAnimacion(scrollPosition) {
  const fps = 30; // Frames por segundo deseado
  const alturaViewport = window.innerHeight;
  const tiempoPorFrame = 1000 / fps; // Tiempo en milisegundos por frame

  // Calcular la altura total del contenido en relación con la altura del viewport
  const relacionAltura = TotalHeight / alturaViewport;

  // Calcular el tiempo total de la animación
  const tiempoTotalAnimacion = relacionAltura * tiempoPorFrame;

  // Calcular el tiempo de la animación en función de la posición actual del scroll
  const tiempoAnimacion = scrollPosition * tiempoTotalAnimacion;

  return tiempoAnimacion;
}
function animate() {
  Totalduration = mixer._actions[0].getClip().duration;
  //requestAnimationFrame(animate);

  // Actualizar la animación




  if (animating) {
    // Actualizar la animación
    if (mixer) {
    }

    // Actualizar la posición y orientación de la cámara
    if (mixer && camera) {
      const camPosition = new THREE.Vector3();
      const camQuaternion = new THREE.Quaternion();
      camera.getWorldPosition(camPosition);
      camera.getWorldQuaternion(camQuaternion);
      camera.position.copy(camPosition);
      camera.quaternion.copy(camQuaternion);
      //console.log(camPosition, "please");
      //console.log(camQuaternion, "please");
      camera.fov = 25;
      camera.updateProjectionMatrix();
      //console.log(camera.position,"position");
      //console.log( camera.quaternion,"quaternion");
      //console.log( camera.fov ,"fov");
      //console.log("animandoo");
    }

    // Renderizar la escena
    console.log("delta2");
    renderer.render(scene1, camera);

    // Volver a solicitar el próximo cuadro de animación
    //composer.render();
    requestAnimationFrame(animate);
    //console.log("requested");
    //console.log(animating);
    if (!scrolling || !startAnimation) {
      //console.log("eeyyeyey");
      if (startAnimation) {
        animating = true;
      } else {
        animating = false;
      }
    }
  }

  if (mixer && cameraControls) {
    const delta = clock.getDelta();

    const hasControlsUpdated = cameraControls.update(delta);
    requestAnimationFrame(animate);
    if (hasControlsUpdated) {
      animating = false;
      console.log("delta1");
      renderer.render(scene1, camera);
      return;
    }
  }
  /*
 







    



*/
  // Lógica de animación aquí...

  // Detener la animación cuando sea necesario

  // Volver a solicitar el próximo cuadro de animación
}
async function loadHeavyModelInBackground() {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  const ktx2Loader = new KTX2Loader();
  ktx2Loader.setTranscoderPath(
    "https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/libs/basis/"
  );
  ktx2Loader.detectSupport(renderer);
  dracoLoader.setDecoderPath(
    "https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/libs/draco/"
  );
  loader.setDRACOLoader(dracoLoader);
  loader.setKTX2Loader(ktx2Loader);


  let parsedCount = 0;
  let totalObjects = 0; // We'll get this after the model is loaded
  let gltf;
  startTime = new Date().getTime();

  tiempoTranscurrido = 0;
  let speed;
  let timeRemaining;

  gltf = await loader.loadAsync('media/VictoriaEugeniaIsla.glb',
    (xhr) => { // onProgress callback 
      let loaded = xhr.loaded; // get the number of bytes transferred so far
      let total = xhr.total; // get the total number of bytes to be transferred

      // calculate the download speed in bytes per second
      speed = (loaded / (new Date().getTime() - startTime)) * 1000;

      // calculate the time remaining in seconds
      timeRemaining = (total - loaded) / speed;

      document.getElementById("textLoading").innerHTML = `${Math.round((xhr.loaded / xhr.total) * 100)}% loaded`;
      tiempoTranscurrido = (new Date().getTime() - startTime) / 1000; // En segundos
      
    }
  ).then(gltf => {
    totalObjects = gltf.scene.children.length; // Now we know how many objects to parse


    function parseNextChunk() {

      if (parsedCount >= totalObjects - 1) {
        const disposeObjects = async () => {
          const disposeChunk = (child) => {
            return new Promise((resolve) => {
              if (child.isMesh) {
                // Configurar frustum culling
                child.frustumCulled = true; // Activar frustum culling (comportamiento predeterminado)

                // Actualizar volúmenes de contorno
                if (child.geometry) {
                  child.geometry.computeBoundingBox();
                  child.geometry.computeBoundingSphere();
                }
              }
              resolve();
            });
          };

          for (const child of gltf.scene.children) {
            if (window.requestIdleCallback) {
              await new Promise((resolve) =>
                requestIdleCallback(() => disposeChunk(child).then(resolve))
              );
            } else {
              await disposeChunk(child);
            }
          }
          await disposeObjects();
        };



        scene1.add(gltf.scene);
        // ... (your animations, post-processing, etc.)
        if (parsedCount == totalObjects - 1) {
          duracionEnSegundos = 20;
          objetoGLB = gltf;
          // Configurar la luz (opcional)

          const scene = gltf.scene;

          mixer = new THREE.AnimationMixer(scene);

          // Configurar EffectComposer para postprocesado
          composer = new EffectComposer(renderer);
          composer.addPass(new RenderPass(scene, camera));

          // Agregar efectos de desenfoque
          const hBlur = new ShaderPass(HorizontalBlurShader);
          const vBlur = new ShaderPass(VerticalBlurShader);
          hBlur.uniforms.h.value = 1 / window.innerWidth;
          vBlur.uniforms.v.value = 1 / window.innerHeight;
          //composer.addPass(hBlur);
          //composer.addPass(vBlur);

          // Agregar efecto de viñeta
          const vignettePass = new ShaderPass(VignetteShader);
          vignettePass.uniforms.offset.value = 0.15; // Valor aumentado para un efecto más grande
          vignettePass.uniforms.darkness.value = 2.1; // Valor aumentado para mayor oscuridad
          composer.addPass(vignettePass);

          // Agregar efecto de motion blur
          const unrealBloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            0.3, // fuerza del efecto
            0.4, // radio del bloom
            0.85 // umbral
          );
          composer.addPass(unrealBloomPass);

          const MotionBlurShader = {
            uniforms: {
              tDiffuse: { value: null },
              sampleLevel: { value: 0.5 },
            },
            vertexShader: `
              varying vec2 vUv;
              void main() {
                  vUv = uv;
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
          `,
            fragmentShader: `
              uniform sampler2D tDiffuse;
              uniform float sampleLevel;
              varying vec2 vUv;
              void main() {
                  vec4 color = texture2D(tDiffuse, vUv);
                  for (float i = 1.0; i < sampleLevel; i++) {
                      color += texture2D(tDiffuse, vUv + vec2(i) * 0.001);
                      color += texture2D(tDiffuse, vUv - vec2(i) * 0.001);
                  }
                  color /= (sampleLevel * 2.0);
                  gl_FragColor = color;
              }
          `,
          };
          // Ajustar efectos para motion blur
          const motionBlurPass = new ShaderPass(MotionBlurShader);
          motionBlurPass.uniforms.sampleLevel.value = 0.39; // nivel de muestreo bajo para un efecto leve
          //composer.addPass(motionBlurPass);

          // Añadir el modelo a la escena

          if (!animating && mixer) {
            const animations = gltf.animations;

            window.player.animationStack = animations;
            const animationsReal = [animations[0]];
            console.log(animations);
            if (animationsReal.length > 1) console.log(animationsReal);
            if (animationsReal.length) {

              animationsReal.forEach((clip) => {
                let action = mixer.clipAction(clip, camera);
                action.play();
              });

              const TotalHeight = document.body.scrollHeight - window.innerHeight;
              const Totalduration = mixer._actions[0].getClip().duration;
              const pixelsPerSecond = TotalHeight / Totalduration;
              const pixelsPerFrame = pixelsPerSecond / 60;

              const scrollPosition = window.scrollY;
              const tiempoAnimacion = calcularTiempoAnimacion(scrollPosition);

              const framesTotales = Totalduration * 60;
              const velocidadDesplazamiento = 100;
              const alturaTotalPagina = (framesTotales / 60) * velocidadDesplazamiento;

              document.body.style.height = `${alturaTotalPagina}px`;


            }


            scene1.add(scene);

            renderer.render(scene1, camera);



          }

        }
        return;
      }
      const object = gltf.scene.children[parsedCount];
      // Do whatever processing is needed for this object (materials, geometry)
      console.log(`Parsed object ${parsedCount + 1} of ${totalObjects}`);

      parsedCount++;
      document.getElementById("textLoading").innerHTML = `${Math.round((parsedCount / totalObjects) * 100)}% loaded por objetos `;

      requestIdleCallback(parseNextChunk);

    }
    requestIdleCallback(parseNextChunk);



  }).catch(error => {
    console.error("Error loading model:", error);
  });




}

async function introAnimation() {
  document.getElementById("myBtn2").style.display = "flex";
  document.getElementById("containerFinal").style.display = "none";
  document.getElementById("container2").style.display = "none";

  gsap.registerPlugin(Flip);

  let layouts = ["final", "plain", "columns", "grid"],
    container = document.querySelector(".container"),
    curLayout = 0; // index of the current layout

  function nextState() {
    const state = Flip.getState(".letter, .for, .gsap", {
      props: "color,backgroundColor",
      simple: true,
    }); // capture current state

    container.classList.remove(layouts[curLayout]); // remove old class
    curLayout = curLayout + 1; // increment (loop back to the start if at the end)
    container.classList.add(layouts[curLayout]); // add the new class
    /*
    Flip.from(state, {
      // animate from the previous state
      absolute: true,
      stagger: 0.07,
      duration: 0.7,
      ease: "power2.inOut",
      spin: curLayout === 0, // only spin when going to the "final" layout
      simple: true,
      onEnter: (elements, animation) =>
        gsap.fromTo(
          elements,
          { opacity: 0 },
          { opacity: 1, delay: animation.duration() - 0.1 }
        ),
      onLeave: (elements) => gsap.to(elements, { opacity: 0 })
    });
    */

    gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState);
  }

  //gsap.delayedCall(1, nextState);

  startAnimation = true;

  animating = true;

  const startTime = Date.now() / 1000; // Inicializa startTime al tiempo actual en segundos

  const animationDuration = window.player.animationStack[0].duration - 0.003;

  const duration = animationDuration; // Duración de la animación en segundos

  const fps = 180;

  const interval = 1000 / fps; // Intervalo en milisegundos para 180 fps

  let elapsedTime = 0; // Elapsed time inicializado en 0

  // Función para aplicar el estado final
  function applyFinalState() {
    //mixer.stopAllAction();
    console.log("Estado final aplicado correctamente.");
  }

  // Función para obtener el tiempo actual en segundos
  function getCurrentTimeInSeconds() {
    return Date.now() / 1000;
  }

  // Función para ajustar el tiempo usando el spline
  function adjustTime(normalizedTime) {
    const points = createSpline();
    return evaluateAtX(points, normalizedTime);
  }

  async function updateAnimation() {
    //console.log("huilianov");
    while (animating) {
      const currentTimeInSeconds = getCurrentTimeInSeconds();
      const delta = currentTimeInSeconds - startTime - elapsedTime; // Calcular el delta correctamente
      elapsedTime += delta;
      //console.log(elapsedTime, "extraterrestre");
      let normalizedTime = elapsedTime / duration;
      let adjustedTime = adjustTime(normalizedTime);

      if (adjustedTime * duration >= duration - 0.05) {
        elapsedTime = duration; // Aseguramos que no superamos el tiempo total

        //console.log("se acabó", elapsedTime, duration);
        animating = false; // Detenemos la animación
        const minY = 50;
        const maxY = 150;

        // Valor mínimo permitido para el componente Z del Quaternion
        const minZQuat = 50.09628776773211387;
        let arkadii = false;
        const maxDistance = 500; // Ajustado para ser mayor que la distancia manual inicial
        const minDistance = 5;
        // Añadir controles de órbita

        camera.updateProjectionMatrix();
        camera.fov = 45; // Campo de visión de la cámara
        camera.updateProjectionMatrix();

        // Animación y renderizado
        document.getElementById("prueba1").style.visibility = "visible";
        document.getElementById("prueba2").style.visibility = "visible";
        document.getElementById("prueba3").style.visibility = "visible";
        cameraControls = new CameraControls(camera, renderer.domElement);
        const cameraPosition = new THREE.Vector3(-817.4701599756836, 150.00000000000006, 20.23478695904612);
        
       
  
        // Define el punto al que la cámara debe mirar
        const targetPosition = new THREE.Vector3(-917.4701599756836, 150.00000000000006, 121.81469027251936);
        
        // Utiliza setLookAt() para configurar la vista inicial
        cameraControls.setLookAt(
          cameraPosition.x,
          cameraPosition.y,
          cameraPosition.z, // Posición de la cámara
          targetPosition.x,
          targetPosition.y,
          targetPosition.z, // Punto objetivo
          true // No habilites la transición, para una configuración instantánea
        );
        animating = true;

        // Escuchar el evento 'control'
        cameraControls.addEventListener("control", () => {
          // Obtener la posición actual de la cámara

          cameraControls.addEventListener("control", () => {
            // Obtener la posición actual de la cámara

            const finalCameraPosition = new THREE.Vector3(
              191.32639772965956,
              95.82001350644393,
              -347.81189778658984
            );

            // Obtener la posición actual del target

            // Actualizar el target en camera-controls

            const cameraPosition = cameraControls.getPosition(
              new THREE.Vector3()
            );

            // Obtener el quaternion actual de la cámara
            const cameraQuaternion = cameraControls.camera.quaternion.clone();

            // Imprimir las coordenadas en la consola (opcional)
            let manualDistance = cameraControls.camera.position.distanceTo(
              cameraControls.getTarget(new THREE.Vector3())
            );
            const cameraDirection = cameraControls
              .getTarget(new THREE.Vector3())
              .sub(cameraControls.camera.position)
              .normalize();
            cameraDirection.y = 0; // Proyecta la dirección al plano horizontal (XZ)

            const horizontalDistance = Math.sqrt(
              cameraPosition.x * cameraPosition.x +
              cameraPosition.z * cameraPosition.z
            );

            const sphereRadius = 950; // Ajusta el radio de la esfera
            
            if (horizontalDistance > sphereRadius) {
              const scaleFactor = sphereRadius / horizontalDistance;
              cameraPosition.x *= scaleFactor;
              cameraPosition.z *= scaleFactor;
            }
              

            if (cameraControls.distance >= 1900) {
              cameraControls.distance = 1900;
            }
            // Calcular el factor de inclinación (utilizando manualDistance)

            // Calcular el factor de inclinación (utilizando manualDistance)
            let tiltFactor = 0;

            //cons targetOffset2 = tiltFactor * manualDistance * 0.2; // Ajusta el factor 0.2 para controlar la intensidad de la inclinación
            // Obtener la posición actual del target
            const targetPosition2 = cameraControls.getTarget(
              new THREE.Vector3()
            );

            // Mover el target verticalmente
            //targetPosition2.y += targetOffset2;


            // Crear un cuaternión de rotación de 90 grados alrededor del eje x
            const minZQuatZoomFactor = Math.max(
              0,
              1 - manualDistance / maxDistance
            ); // 0 cuando el zoom es máximo, 1 cuando es mínimo
            // minZQuat original multiplicado por el factor de zoom

            // Verificar si el componente Z del Quaternion está por debajo del límite dinámico

            // Restablecer la rotación de la cámara al estado inicial

            // Verificar si la cámara está por debajo del límite en Y
            console.log(window.player.mapMode,"E");

            if(window.player.mapMode == true){
              if (cameraPosition.y < minY) {
                cameraPosition.y = minY;
              }
  
              if (cameraPosition.y > maxY) {
                cameraPosition.y = maxY;
              }
             // console.log("mapMode");
            }

            if(window.player.carMode == true){
              if (cameraPosition.y < 10) {
                cameraPosition.y = 10;
              }
  
              if (cameraPosition.y > minY) {
                cameraPosition.y = minY;
              }
              //console.log("carMode");
            }

            if(window.player.droneMode == true){
              if (cameraPosition.y < maxY) {
                cameraPosition.y = maxY;
              }
  
              if (cameraPosition.y > (maxY + 40)) {
                cameraPosition.y = (maxY + 40);
              }
              //console.log("droneMode");
            }


            // Verificar si el componente Z del Quaternion está por debajo del límite

            if (cameraQuaternion._z < minZQuat) {
              cameraQuaternion._z = minZQuat;
            }

            if (cameraQuaternion._z < minZQuat) {
              cameraQuaternion._z = minZQuat;
            }

            // Actualizar la posición y la rotación de la cámara
            cameraControls.setPosition(
              cameraPosition.x, // Utiliza la posición horizontal limitada
              cameraPosition.y,
              cameraPosition.z, // Utiliza la posición horizontal limitada
              true
            );

            const fixedPivotHeight = 16;

            // Obtener la posición actual del target
            const currentTarget = cameraControls.getTarget(new THREE.Vector3());
            currentTarget.y = fixedPivotHeight;

            //document.addEventListener('mouseup', onDocumentMouseDown, false);

            // Actualizar el orbitPoint
            //cameraControls.setOrbitPoint(currentTarget.x, currentTarget.y, currentTarget.z);
          });
          cameraControls.boundaryEnclosesCamera = true;

          //renderer.render(scene1, camera);
        });

        window.addEventListener("resize", onWindowResize, false);

        function onWindowResize() {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        }

        document.getElementById("main").style.display = "none";
        applyFinalState();
        return; // Salimos del bucle
      }

      animating = true;
      mixer.setTime(adjustedTime * duration); // Ajustamos el tiempo en el mixer
      //console.log(adjustedTime * duration, elapsedTime, duration , "se acabo");
      mixer.update(delta); // Actualizamos el mixer con el delta
      // Esperamos el intervalo de tiempo antes de la siguiente ejecución
      await new Promise((resolve) => setTimeout(resolve, interval));
    }
  }

  animate();
  updateAnimation(); // Comenzar la animación
}

function createSpline() {
  const points = [
    [0, 0], // Inicio de la animación, empieza en calma
    [0.2, 0.5], // Subida rápida
    [0.4, 0.8], // Continúa subiendo
    [0.6, 1.0], // Pico de la subida
    [0.8, 0.9], // Comienza a reducirse
    [1, 0.7], // Reducción final
  ];
  return points;
}

function evaluateAtX(points, x) {
  //console.log("Evaluating at x:", x);

  if (x < points[0][0]) {
    //console.log("x is less than the first point's x, using the first y:", points[0][1]);
    return points[0][1];
  }

  for (let i = 0; i < points.length - 1; i++) {
    if (x >= points[i][0] && x <= points[i + 1][0]) {
      const t = (x - points[i][0]) / (points[i + 1][0] - points[i][0]);
      const interpolatedY =
        points[i][1] + t * (points[i + 1][1] - points[i][1]);
      //console.log(`Interpolating between points ${i} and ${i + 1}`, points[i], points[i + 1], "Resulting y:", interpolatedY);
      return interpolatedY;
    }
  }

  //console.log("x is greater than the last point's x, using the last y:", points[points.length - 1][1]);
  return points[points.length - 1][1];
}
function scrollToBottom(speed) {
  return new Promise((resolve, reject) => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const totalDuration = mixer._actions[0].getClip().duration;
    const pixelsPerSecond = documentHeight / totalDuration;
    const pixelsPerFrame = pixelsPerSecond / 3000;

    let currentPosition = 0;

    const scrollStep = () => {
      currentPosition += pixelsPerFrame * speed;
      if (currentPosition >= documentHeight - windowHeight) {
        window.scrollTo(0, documentHeight - windowHeight);
        resolve(); // Resuelve la promesa cuando llega al final
      } else {
        window.scrollTo(0, currentPosition);
        setTimeout(scrollStep, 1000 / 60); // Llama a scrollStep aproximadamente cada 16ms (60fps)
      }
    };

    scrollStep(); // Comienza el scroll
  });
}
async function ScrollToGetBetterFeeling(unidades) {
  try {
    for (let i = 0; i < unidades; i++) {
      await scrollToBottom(255); // Velocidad de scroll ajustable

      // Aquí puedes hacer lo que necesites una vez que llegues al final de la página
    }
    document.getElementById("myBtn").style.visibility = "visible";
    document.getElementById("myBtn").style.position = "absolute";
    document.getElementById("myBtn").style.bottom = "30% !important";
    
    if(anim){
      anim.play();
    }
  } catch (error) {
    console.error("Hubo un error al hacer scroll:", error);
  }
}
  // IMPORTANTE
window.onload = function () {

  animation = gsap.to(["#image1", "#image2", "#image3"], {
    x: -500,
    y: -700,
    duration: 20,
    repeat: -1,
    yoyo: true,
    onComplete: () => {  // Callback function after this animation completes

    }
  });

  if (typeof lottie === "undefined") {
    //console.error('Lottie library not loaded');
  } else {
    //console.log('Lottie library loaded successfully');
    //console.log('Available functions:', Object.keys(lottie));

    const containerElement = document.getElementById("lottie-container");
    /*
    lottie.loadAnimation({
      container: containerElement, // Elemento HTML donde se renderizará la animación
      renderer: 'svg', // Tipo de renderizador
      loop: false, // Si la animación debe repetirse en bucle
      autoplay: true, // Si la animación debe comenzar automáticamente al cargarse
      path: 'https://lottie.host/31257f58-de04-4d61-ba26-85cf62b7cc40/jnCrP1dNBG.json' // URL del archivo JSON de la animación
  });*/
  }

  document.getElementById("myBtn").addEventListener("click", () => {
    // Пауза текущей анимации
    // Здесь добавьте код для запуска второй анимации
    
    gsap.to(["#image1", "#image2", "#image3"], {
      scale: 4,
      opacity: 0,
      duration: 5
    });
    gsap.to("#image1", {
      x: 1000,
      y: 1000,
      duration: 5
    });
    gsap.to("#image2", {
      x: -700,
      y: -700,
      duration: 3,
      onComplete: () => {  // Callback function after this animation completes
        gsap.to(".container2", {
          opacity: 0,
          duration: 1

        });
        document.getElementById("overlayContainer").style.background = "none";
        document.getElementById("canvas-container").style.zIndex =
          "101 !important";
        document
          .getElementById("branding")
          .setAttribute("data", "/media/Logo_White.svg");
        document.getElementById("canvas-container").style.position =
          "fixed";
        document.getElementById("canvas-container").style.visibility =
          "visible";
        introAnimation();
      }
    });
    gsap.to("#image3", {
      x: 1000,
      y: -1000,
      duration: 5
    });
    gsap.to(".container2", {
      opacity: 0,
      duration: 3
    });
    //console.log(animating);
    if (!animating) {
      document.getElementById("animated-svg12").style.display = "none";
      document.getElementById("intro").style.display = "none";
    }
  });
  document.getElementById("giblan").addEventListener("click", () => {
    
    window.location.hash = 'demo-modal';
      // insertar modal simple 
  });
  init();
  // Corrutina para verificar si el mixer no está undefined
  function checkMixer() {
    //console.log("heavy model cargado ");
    tiempoTranscurrido = (new Date().getTime() - startTime) / 1000; // En segundos
    

    if (tiempoTranscurrido >= 20.00) {

      if (anim && anim2) {

       

        if(tiempoRelativo == false){
          anim.currentFrame = 1200;
          anim.stop();
          tiempoRelativo = true;
        }
      

      }
    }
    if (tiempoTranscurrido >= 23.30) {
      
      if (anim && anim2) {
        if(tiempoRelativo2 == false){
          anim2.currentFrame = 1398;
          anim2.stop();
          anim2.play();
          tiempoRelativo2 = true;
          
        }
        
      
      }
      
    }
    

if (mixer !== undefined) {
  // El mixer no está undefined, ejecuta tu trozo de código aquí
  //console.log("El mixer está definido. ¡Hagamos algo!");
  if (mixer == undefined) {
    //console.log("2",mixer);
  } else {

    TotalHeight = document.body.scrollHeight - window.innerHeight;
    Totalduration = mixer._actions[0].getClip().duration;
    //console.log(mixer._actions[0]);
    let pixelsPerSecond = TotalHeight / Totalduration;

    // Calcular cuántos píxeles representan un fotograma individual a 60 FPS
    let pixelsPerFrame = pixelsPerSecond / 60;

    const scrollPosition = window.scrollY;
    const tiempoAnimacion = calcularTiempoAnimacion(scrollPosition);

    const framesTotales = Totalduration * 60;

    // Estimación de la altura total de la página
    const velocidadDesplazamiento = 100; // Ejemplo: 100 pixels por segundo
    const alturaTotalPagina =
      (framesTotales / 60) * velocidadDesplazamiento;

    //console.log(pixelsPerFrame, "y esto por todos los segundos ");
    //console.log(alturaTotalPagina);
    document.body.style.height = `${alturaTotalPagina}px`;
    animating = true;
    document.getElementById("textLoading").innerHTML = "100% loaded";
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("overlayContainer").style.display = "block";
    mixer.setTime(30);
    animate();
    //console.log("heavy model cargado ");

    // vamos a añadir logica de textos y luego esto
    if(anim){
      anim.play();
    }
    ScrollToGetBetterFeeling(2);
    //document.getElementById("myBtn").style.visibility = "visible";
    animating = false;
  }
} else {
  // El mixer está undefined, vuelve a verificar en 1 segundo
  setTimeout(checkMixer, 1000);
}
  }

// Inicia la corrutina
checkMixer();

document.addEventListener("DOMContentLoaded", function (event) {
  gsap.registerPlugin(
    ScrollTrigger,
    Observer,
    ScrollToPlugin,
    MotionPathPlugin,
    Flip,
    SlowMo
  );
  // gsap code here!
});
};
