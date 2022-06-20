document.body.onload = async function () {
    let opacityPercentage = 1
    let screenShotId = 1

    while (true){
        while (opacityPercentage > 0) {
            document.getElementById("actual-screenshot").style.opacity = opacityPercentage
            opacityPercentage = opacityPercentage - 0.01
            await delay()
        }

        opacityPercentage = 1
        document.getElementById("actual-screenshot").src = document.getElementById("next-screenshot").src
        document.getElementById("actual-screenshot").style.opacity = opacityPercentage

        screenShotId == 4 ? screenShotId = 1 : screenShotId += 1
        
        document.getElementById("next-screenshot").src = "./assets/screenshots/screenshot" + screenShotId + ".png"
        await delay(2000)

        function delay(ms=20) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    }
}



