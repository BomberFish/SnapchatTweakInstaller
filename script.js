// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0
const shareData = {
  title: 'Snapchat++ Installer',
  text: 'Install Snapchat++ easily',
  url: 'https://bomberfish.ca/SnapchatTweakInstaller'
}

function buttonClick(element) {
  if (element.className == "clicked") {
    window.location.href = "itms-services://?action=download-manifest&url=https://bomberfish.ca/SnapchatTweakInstaller/snap.plist"
  }
  element.style.background = "var(--green)"
  element.style.width = "8.5rem"
  element.innerHTML = "Install"
  element.classList.add("clicked");
}

document.getElementById("share").addEventListener('click', async () => {
  await navigator.share(shareData);
});
// @license-end