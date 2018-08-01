const router = require('express').Router();
const edge = require('edge');

router.get('/', (req, res) => {
    
    var execute = edge.func(function () {
        /*
        using System.Threading.Tasks;
        using System.Diagnostics;

        public class Startup
        {        
            public async Task<object> Invoke(object input)
            {
                Process.Start("C:\\Users\\Administrator\\Desktop\\wgApp.exe");
                return "Initiating executable";
            }
        }
        */
      });

    execute(100, (err, result) => {
        if(err){
            console.log("ERROR: " , err);
            return;
        }
        console.log(result);
    })

    console.log("reached wg route");

    res.send("Reahed wg route");
});

module.exports = router;