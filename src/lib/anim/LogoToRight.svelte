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

        function moveImage(obj, x) {
            obj.position.x = x;
        }

        function getX(obj) {
            return obj.position.x;
        }

        spline
            .load("https://prod.spline.design/98jFd6yrp4eAmKOj/scene.splinecode")
            .then(() => {
                const piocheInstance = spline.findObjectByName("Pioche Instance");
                const piocheInstance2 = spline.findObjectByName("Pioche Instance 2");
                const piocheInstance3 = spline.findObjectByName("Pioche Instance 3");
                const piocheInstance5 = spline.findObjectByName("Pioche Instance 5");
                const aedile = spline.findObjectByName("Aedile");
                const rectCanvas = canvas.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;

                xPiocheInstance = getX(piocheInstance);
                xPiocheInstance2 = getX(piocheInstance2);
                xPiocheInstance3 = getX(piocheInstance3);
                xPiocheInstance5 = getX(piocheInstance5);
                xAedile = getX(aedile);
                document.addEventListener("scroll", () => {
                    const isVisible = rectCanvas.top <= windowHeight && rectCanvas.top + rectCanvas.height >= 0;

                    if (isVisible) {
                        let currentScroll =
                            document.documentElement.scrollTop || document.body.scrollTop;
                        moveImage(piocheInstance, piocheInstance + currentScroll);
                        moveImage(piocheInstance2, xPiocheInstance2 + currentScroll);
                        moveImage(piocheInstance3, xPiocheInstance3 + currentScroll);
                        moveImage(piocheInstance5, xPiocheInstance5 + currentScroll);
                        moveImage(aedile, xAedile + currentScroll);
                    }
                });
            });
    });
</script>
<canvas id="canvas3d"></canvas>
