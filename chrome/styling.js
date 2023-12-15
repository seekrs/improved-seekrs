// Check if Seekers
if (document.body.textContent.includes('Seekers'))
{
	console.log('✅ he is a gigachad');
	var css = '.coalition-flag--flag { \n	fill: #D950FF !important;\n}\n.coalition-span {\n	color: #D950FF !important;\n}\n#metrics  li {\n	background-color: #d950ff !important;\n}\n#metrics ol {\n	border-left: 1px solid rgb(217, 50, 255) !important;\n}\n.progress-bar {\n	background: #d950ff !important;\n}\ndiv#coalition-top-body a {\n	color: #d950ff !important;\n}\ndiv#coalition-global-data a {\n    color: #d950ff !important;\n}\n';
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
