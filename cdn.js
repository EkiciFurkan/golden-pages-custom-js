document.addEventListener('DOMContentLoaded', function () {
	const PAGE_URL = window.location.href;

	const whatsappButton = document.querySelector('.whatsapp-share-button');
	const whatsappBaseUrl = 'https://api.whatsapp.com/send?text=';
	const encodedPageUrl = encodeURIComponent(PAGE_URL);
	const shareMessage = encodeURIComponent('Check out this page: ');

	if (whatsappButton) {
		whatsappButton.href = whatsappBaseUrl + shareMessage + encodedPageUrl;
	}

	const qrcodeContainer = document.getElementById('qrcode');

	if (qrcodeContainer) {
		new QRCode(qrcodeContainer, {
			text: PAGE_URL,
			width: 128,
			height: 128,
			colorDark: "#000000",
			colorLight: "#ffffff",
			correctLevel: QRCode.CorrectLevel.H
		});
	}
});

document.addEventListener("DOMContentLoaded", () => {
	const socialItems = document.querySelectorAll(".social-item");

	socialItems.forEach(item => {
		const hrefAttr = item.getAttribute("href");

		if (!hrefAttr || hrefAttr === "" || hrefAttr === "#") {
			item.style.display = "none";
		}
	});
});