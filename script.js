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