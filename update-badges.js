// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   update-badges.js                                   :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: kiroussa <oss@xtrm.me>                     +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2024/06/11 01:53:30 by kiroussa          #+#    #+#             //
//   Updated: 2024/06/11 08:05:56 by kiroussa         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

function addTag(user, tag, color) {
	pageUser = document.getElementsByClassName("login");
	if (pageUser.length > 0) {
		if (pageUser[0].dataset.login === user) {
			const name = document.getElementsByClassName("name");
			if (name.length == 0)
				return;
			document.getElementsByClassName("name")[0].insertAdjacentHTML("beforebegin", "<span class='user-badge' style='background-color: " + color + "; border-color:" + color + "'>" + tag + "</span>\n &nbsp \n");
		}
	}
}

async function applyBadges() {
	const requestURL = repoRawUrl + "/data/badges.json";
	const request = new Request(requestURL);

	const response = await fetch(request);
	const badges = await response.json();

	for (const badge of badges) {
		addTag(badge.user, badge.tag, badge.color);
	}
}

try {
	applyBadges();
} catch (error) {
	console.error("Failed to apply badges: " + error);
}
