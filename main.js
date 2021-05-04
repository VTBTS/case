var img =[
  "mat.jpg",
  "pillow.jpg",
  "dumbels.jpg",
];

var wf=[
    "door mat",
    "paiting",
    "dumbles",
  ];

var mn=[
  "mat",
  "bed",
  "feet",
];

var i = 0;
function mocve() {
  document.getElementById("imgagee").src = img[i];i++;
  document.getElementById("wfp").innerHTMl = wf[i];i++;
  document.getElementById("mdm").innerHTML=mn[i];i++;
}