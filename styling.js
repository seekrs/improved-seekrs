async function getStorage()
{
	let storageValues = await browser.storage.local.get('colorStatus');
	console.log(storageValues.colorStatus);
	return(storageValues.colorStatus);
}

async function toggle()
{
	let storageValues = await browser.storage.local.get('colorStatus');
	if (storageValues.colorStatus)
	{
		browser.storage.local.set({colorStatus: false});
		return;
	}
	else
	{
		browser.storage.local.set({colorStatus: true});
		return;
	}
}

// Check if Seekers
async function color()
{
	let isEnable = await getStorage();

	if (isEnable === undefined)
	{
		browser.storage.local.set({colorStatus: true});
		isEnable = getStorage();
	}

	if (isEnable && document.body.textContent.includes('Seekers'))
	{
		console.log('✅ he is a gigachad');
		var css = ':root { \n	--theme-color: #D950FF;\n	--theme-color-dark: #9d36ad;\n --theme-color-light: #e99cff;\n --logtime-chart-24h-color: #e99cff;\n}\n.coalition-flag--flag { \n	fill: #D950FF !important;\n}\n.coalition-span {\n	color: #D950FF !important;\n}\n#metrics  li {\n	background-color: #d950ff !important;\n}\n#metrics ol {\n	border-left: 1px solid rgb(217, 50, 255) !important;\n}\n.progress-bar {\n	background: #d950ff !important;\n}\ndiv#coalition-top-body a {\n	color: #d950ff !important;\n}\ndiv#coalition-global-data a {\n    color: #d950ff !important;\n}\n';
		head = document.head || document.getElementsByTagName('head')[0],
		style = document.createElement('style');

		head.appendChild(style);

		style.type = 'text/css';
		if (style.styleSheet)
		{
		// This is required for IE8 and below.
		style.styleSheet.cssText = css;
		}
		else {
		style.appendChild(document.createTextNode(css));
		}
	}
	else
	{
		console.log('⛔️ booooo loosers');
	}
}

color();

browser.storage.local.onChanged.addListener(color);