<script type="application/javascript">
    import {onMount} from 'svelte';
    import {Application} from "@splinetool/runtime";

    onMount(() => {

        const canvas = document.getElementById("canvas3d");
        const spline = new Application(canvas);

        let xPiocheInstance = 0;
        let xPiocheInstance2 = 0;
        let xPiocheInstance3 = 0;
        let xPiocheInstance5 = 0;
        let xAedile = 0;

        function moveImage(name, x) {
            const obj = spline.findObjectByName(name);
            obj.position.x = x;
        }

        function getX(name) {
            const obj = spline.findObjectByName(name);
            return obj.position.x;
        }

        spline
            .load("https://prod.spline.design/98jFd6yrp4eAmKOj/scene.splinecode")
            .then(() => {
                xPiocheInstance = getX("Pioche Instance");
                xPiocheInstance2 = getX("Pioche Instance 2");
                xPiocheInstance3 = getX("Pioche Instance 3");
                xPiocheInstance5 = getX("Pioche Instance 5");
                xAedile = getX("Aedile");
                document.addEventListener("scroll", (e) => {
                    let currentScroll =
                        document.documentElement.scrollTop || document.body.scrollTop;
                    moveImage("Pioche Instance", xPiocheInstance + currentScroll);
                    moveImage("Pioche Instance 2", xPiocheInstance2 + currentScroll);
                    moveImage("Pioche Instance 3", xPiocheInstance3 + currentScroll);
                    moveImage("Pioche Instance 5", xPiocheInstance5 + currentScroll);
                    moveImage("Aedile", xAedile + currentScroll);
                });
            });
    });
</script>
<canvas id="canvas3d"></canvas>
