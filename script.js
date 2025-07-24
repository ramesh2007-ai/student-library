const videos = {
  dmgt: [
    { title: "DMGT - unit 1", url: "https://youtu.be/lb9GRo3mQPA?si=sAqS3J2rnN0fwIFW" },
    { title: "DMGT - unit 2", url: "https://youtu.be/OMmaW95gwAs?si=coZ82X3tFvceGocI" },
    { title: "DMGT - unit 3", url: "https://youtu.be/OMmaW95gwAs?si=coZ82X3tFvceGocI" },
    { title: "DMGT - unit 4", url: "https://youtu.be/OMmaW95gwAs?si=coZ82X3tFvceGocI" },
    { title: "DMGT - unit 5", url: "https://youtu.be/OMmaW95gwAs?si=coZ82X3tFvceGocI" },
    
  ],
  java: [
    { title: "Java - video 1", url: "https://youtu.be/prfwlnq2vJY?si=Z6F2enhCn17cFIna" },
    { title: "Java - video2", url: "https://youtu.be/aMaayeDW360?si=VsD5cPOtgZDz_X6q" }
  ],
  python: [
    { title: "Python - video 1", url: "https://youtu.be/ZkndfcIyxMM?si=WRsDE09jKP09ERoa" },
    { title: "Python - video2", url: "https://youtu.be/GmdGv5ndX54?si=tVfNA72fcGa4Q_NI" }
  ],
  ads: [
    { title: "ADS - video1", url: "https://youtu.be/L0bG4pntaV8?si=zxqCieHoxzuHFGIS" },
    { title: "ADS - video2", url: "https://youtu.be/jDgzvO-t740?si=wC33QPjy4Uay52C2" }
  ]
};

let currentSubject = "";

function showVideos(subject) {
  currentSubject = subject;
  document.getElementById('searchInput').value = "";
  displayVideos(videos[subject]);
}

function displayVideos(videoArray) {
  const listDiv = document.getElementById('videoList');
  const noResult = document.getElementById('noResult');
  listDiv.innerHTML = "";
  noResult.innerText = "";

  if (videoArray.length === 0) {
    noResult.innerText = "Video not available";
    return;
  }

  videoArray.forEach(video => {
    const link = document.createElement('a');
    link.href = video.url;
    link.textContent = video.title;
    link.target = "_blank";
    listDiv.appendChild(link);
  });
}

function searchVideos() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const noResult = document.getElementById('noResult');
  let allVideos = [];

  Object.keys(videos).forEach(subject => {
    allVideos = allVideos.concat(videos[subject]);
  });

  const filtered = allVideos.filter(video => video.title.toLowerCase().includes(query));

  if (query === "") {
    if (currentSubject) {
      displayVideos(videos[currentSubject]);
    } else {
      document.getElementById('videoList').innerHTML = "";
    }
  } else {
    displayVideos(filtered);
    if (filtered.length === 0) {
      noResult.innerText = "Video not available";
    }
  }
}
