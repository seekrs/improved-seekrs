/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   extra-styling.js                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjoly <adjoly@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/12/13 02:05:21 by yosyo             #+#    #+#             */
/*   Updated: 2023/12/15 17:45:28 by adjoly           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var all = document.getElementsByTagName("*");

function seekersUpdate()
{
    var all = document.getElementsByTagName("*");
    for (var i=0, max=all.length; i < max; i++) {
        if (all[i].style)
        {
            if (all[i].style.color == 'rgb(255, 105, 80)')
            {
                all[i].style.color = '#D950FF';
            }
            if (all[i].style.backgroundColor == 'rgb(255, 105, 80)')
            {
                all[i].style.backgroundColor = '#D950FF';
            }
            if (all[i].style.fill == 'rgb(255, 105, 80)')
            {
                all[i].style.fill = '#D950FF';
            }
        }
    }
}

seekersUpdate();

function addTag(user, tag, color)
{
	pageUser = document.getElementsByClassName("login");
	if (pageUser)
		if (pageUser[0].textContent == user)
			document.getElementsByClassName("name")[0].insertAdjacentHTML("beforebegin", "<span class='user-badge' style='background-color: " + color + "; border-color:" + color + "'>" + tag + "</span>\n &nbsp \n");
}

addTag("kiroussa", "kroussar", "#000000");

async function applyBadges() {
	const requestURL = "https://raw.githubusercontent.com/seekrs/improved-seekrs/main/badges.json";
  	const request = new Request(requestURL);

	const response = await fetch(request);
	const badges = await response.json();

	for (badge in badges)
	{
		addTag(badges[badge].user, badges[badge].tag, badges[badge].color);
	}
}

applyBadges();
