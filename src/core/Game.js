import * as THREE from "three";

export class Game {

    constructor() {

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x87CEEB);

        this.camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        this.camera.position.set(0,8,12);

        this.renderer = new THREE.WebGLRenderer({
            antialias:true
        });

        this.renderer.setSize(window.innerWidth,window.innerHeight);

        this.renderer.shadowMap.enabled = true;

        document.body.appendChild(this.renderer.domElement);

        window.addEventListener("resize",()=>{

            this.camera.aspect=window.innerWidth/window.innerHeight;

            this.camera.updateProjectionMatrix();

            this.renderer.setSize(window.innerWidth,window.innerHeight);

        });

        this.animate();

    }

    animate=()=>{

        requestAnimationFrame(this.animate);

        this.renderer.render(
            this.scene,
            this.camera
        );

    }

}