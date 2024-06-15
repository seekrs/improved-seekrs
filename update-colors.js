// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   update-colors.js                                   :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: kiroussa <oss@xtrm.me>                     +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2024/06/11 01:51:56 by kiroussa          #+#    #+#             //
//   Updated: 2024/06/11 08:11:33 by kiroussa         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

const redRgbDeclaration = "rgb(255, 105, 80)";
const mainSeekrsColor = "#d950ff";

function updateColors()
{
    const head = document.head || document.getElementsByTagName('head')[0];
	const style = document.createElement('style');

	head.appendChild(style);

	const file = isSeekrsProfile() ? "seekrs" : "default";

	style.type = "text/css";
	style.href = repoRawUrl + `/data/${file}.css`

	//FIXME: This doesn't work because the page is reloaded after calendar load, and the colors are reset
	//From what I saw this doesn't seem to be needed with the css file, so I'm commenting it out
	// var all = document.getElementsByTagName("*");
	// for (const element of all) {
	// 	if (element.style.color === redRgbDeclaration) {
	// 		element.style.color = mainSeekrsColor;
	// 	}
	// 	if (element.style.backgroundColor === redRgbDeclaration) {
	// 		element.style.backgroundColor = mainSeekrsColor;
	// 	}
	// 	if (element.style.fill === redRgbDeclaration) {
	// 		element.style.fill = mainSeekrsColor;
	// 	}
	// }
}

try {
	updateColors();
} catch (e) {
	console.error("Error while updating colors", e);
}
