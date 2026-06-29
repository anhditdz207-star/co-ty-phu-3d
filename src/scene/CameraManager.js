import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class CameraManager {

    constructor(camera, renderer){

        this.controls = new OrbitControls(
            camera,
            renderer.domElement
        );

        this.controls.enableDamping = true;

        this.controls.dampingFactor = 0.08;

        this.controls.target.set(0,0,0);

        this.controls.minDistance = 5;

        this.controls.maxDistance = 30;

        this.controls.maxPolarAngle = Math.PI/2.05;

    }

    update(){

        this.controls.update();

    }

}