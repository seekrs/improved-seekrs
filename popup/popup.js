async function buttonColor()
{
	let storageValues = await browser.storage.local.get('colorStatus');
	if (storageValues.colorStatus)
        document.querySelector("button").style.color = '#D950FF';
	else
        document.querySelector("button").style.color = 'whitesmoke';
}

buttonColor();

async function toggle()
{
	let storageValues = await browser.storage.local.get('colorStatus');
	if (storageValues.colorStatus)
	{
		browser.storage.local.set({colorStatus: false});
        document.querySelector("button").style.color = 'whitesmoke';
	}
	else
	{
		browser.storage.local.set({colorStatus: true});
        document.querySelector("button").style.color = '#D950FF';
	}
}

const btn = document.querySelector("button");
btn.addEventListener("click", toggle);
