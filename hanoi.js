function main(n)
    {
        var res = []
        rs(n, "initial", "intermediate", "final")
        output(res)
        return res;
function rs(n, initial, intermediate, final)
        {
            if(n == 1)
                {
                    res.push([initial, final])
                }
            else
                {
                    rs(n-1, initial, final, intermediate)
                    rs(1, initial, intermediate, final)
                    rs(n-1, intermediate, initial, final)
                }
        }
    }
function wordToNumber(word) {
    if (word == "initial")
        return 0;
    if (word == "intermediate")
        return 1;
    return 2;
}
function output(res)
    {
       for(var i = 0; i < res.length; i++)
           {
               console.log("move disk from " + res[i][0] + " to " + res[i][1])
           }
    }
var n = parseInt(prompt("Enter the number of disks"))
function time1(n)
    {
    var t1 = performance.now();
    steps = main(n)
    return performance.now() - t1
    }
var steps;
console.log(Math.floor(time1(n)*100)/100000)
console.log("время выполнения")
console.log("Сложность класса = np")
var canvas = document.getElementById("canv")
var ctx = canvas.getContext('2d');
var diskHeight = 18
var diskWidth = 80
var diskWidthDiff = 8
var currentStep = 0;
class Disk
    {
        constructor(width = diskWidth, color, height = diskHeight)
        {
            this.width = width
            this.color = color
            this.height = height
        }
    Draw(xPos, yPos) 
        {
    ctx.fillStyle = this.color;
    ctx.fillRect(xPos - this.width / 2, yPos - this.height, this.width, this.height);
ctx.strokeStyle = "#F00";
ctx.font = '30px sans-serif';
ctx.strokeText("Initial", 138, 670);
ctx.strokeStyle = "#F00";
ctx.font = '30px sans-serif';
ctx.strokeText("Intermediate", 270, 670);
ctx.strokeStyle = "#F00";
ctx.font = '30px sans-serif';
ctx.strokeText("final", 499, 670);
        }
    }
class Rod {
     constructor(n, num) {
        this.stick = new Disk(diskWidthDiff, "brown", (n + 2) * diskHeight);
        this.downDisk = new Disk(diskWidth + diskWidthDiff * n, "brown");
        this.disks = [];
        this.xPos = canvas.width / 4 * num;
    }
    Push(disk) {
    this.disks.unshift(disk);
}
Pop() {
    return this.disks.shift();
}
       Draw(num) {
    var yPos = canvas.height - 3 * diskHeight;
    this.stick.Draw(this.xPos, yPos);
    this.downDisk.Draw(this.xPos, yPos);
   for (var i = this.disks.length - 1; i >= 0; i--) {
        this.disks[i].Draw(this.xPos, yPos - diskHeight * (this.disks.length - i));
    }

}
 Init(n) {
    var unusedColors = colors.slice();
    for (var i = 0; i < n; i++) {
        var colorIndex = Math.floor(Math.random() * unusedColors.length);
        this.disks.push(new Disk(diskWidth + i * diskWidthDiff, unusedColors[colorIndex]));
        unusedColors.splice(colorIndex, 1);
        if (unusedColors.length == 0) {
            unusedColors = colors.slice();
        }
    }
}
}
document.body.onkeydown = function(e) {
    if (e.keyCode == 39 && currentStep < steps.length) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var step = steps[currentStep++];
        var from = wordToNumber(step[0]), to = wordToNumber(step[1]);
        rods[to].Push(rods[from].Pop());

        for (var i = 0; i < rods.length; i++) {
            rods[i].Draw();
        }        
    }
}
var colors = ["#F08080", "#C71585", "#FFFF00", "#EEE8AA", "#EE82EE", "#6A5ACD", "#778899", "#00BFFF", "#00FF00", "#FF0000", "#191970"];
var rods = [new Rod(n, 1), new Rod(n, 2), new Rod(n, 3)]
rods[0].Init(n);
for (var i = 0; i < rods.length; i++) {
     rods[i].Draw();
}