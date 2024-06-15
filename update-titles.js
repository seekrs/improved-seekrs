// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   update-titles.js                                   :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: kiroussa <oss@xtrm.me>                     +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2024/06/11 01:52:32 by kiroussa          #+#    #+#             //
//   Updated: 2024/06/11 08:06:03 by kiroussa         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

function addTitle(user, prefix, suffix, format) {
	// Sanity checks
	format = format || "%prefix% %user% %suffix%";
	prefix = prefix || "";
	suffix = suffix || "";

	const titledName = format.replace("%prefix%", prefix)
							 .replace("%user%", user)
							 .replace("%suffix%", suffix);

	// Update the user name in the profile header
	pageUser = document.getElementsByClassName("login");
	if (pageUser.length > 0) {
		if (pageUser[0].dataset.login === user) {
			pageUser[0].textContent = titledName;
		}
	}
	// Update the user name in the evaluations section
	document.querySelectorAll("#collapseEvaluations .reminder .project-item-text a").forEach((aTag) => {
		if (aTag.dataset.userLink === user) {
			aTag.textContent = titledName;
		}
	});
}


async function applyTitles() {
	const requestURL = repoRawUrl + "/data/titles.json";
	const request = new Request(requestURL);

	const response = await fetch(request);
	const titles = await response.json();

	for (const title of titles) {
		addTitle(title.user, title.prefix, title.suffix, title.format);
	}
}

try {
	applyTitles();
} catch (error) {
	console.error("Failed to apply titles: " + error);
}
