var elements = Array.from(document.querySelectorAll('a')).filter(a => a.textContent.includes('.srt'));

function webScrapping(){  
  function downloadSRT(elm, i) {
    return new Promise(resolve => {
      setTimeout(function() {
        var progress = `${i + 1}/${elements.length + 1}`
        console.info(`[${progress}] - Downloading #: ${elm.innerHTML} ...`);
        var element = document.createElement('a');
        element.setAttribute('href', elm.href);
        element.setAttribute('download', elm.innerHTML);
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        resolve();
      }, i * 5000);
    });
  }
  console.log('>>>>> Starting webScrapping :)');
  var downloadPromises = elements.map(downloadSRT);
  Promise.all(downloadPromises).then(() => {
    console.log('🎉🎉🎉 Hooray! All downloads have been successfully completed!🎉🎉🎉');
    console.log('.\n.\n.\n.\n🚀🚀🚀 This awesome script was brought to you by @albertolicea00. 🎈🎈🎈 Check out more of his work on GitHub at https://github.com/albertolicea00.');
  });
}

console.log(`
  📥📥📥 This script will download all .srt files linked on this page📥📥📥 \n
  <> Before you start, please go to 'Settings > Downloads' in your browser and disable the option to ask each time before downloading.
  <> Also, define the default location where you want all these files to be downloaded. You can change this back later if you wish.
  `);

console.log(`Execute webScrapping's function to start. ✅✅✅\nExample :
  >> webScrapping()
  `);
