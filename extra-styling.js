/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yosyo <mmoussou@student.42angouleme.fr >   +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/12/13 02:05:21 by yosyo             #+#    #+#             */
/*   Updated: 2023/12/13 02:05:21 by yosyo            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var all = document.getElementsByTagName("*");

var css = ":root { \n	--theme-color: #D950FF;\n	--theme-color-dark: #9d36ad;\n --theme-color-light: #e99cff;\n --logtime-chart-24h-color: #e99cff;\n}";

var styleSheet = document.createElement("style");
styleSheet.innerText = css;
document.head.appendChild(styleSheet);

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

async function applyBadges() {
	const requestURL = "https://raw.githubusercontent.com/seekrs/improved-seekrs/main/data/badges.json";
  	const request = new Request(requestURL);

	const response = await fetch(request);
	const badges = await response.json();

	for (badge in badges)
	{
		addTag(badges[badge].user, badges[badge].tag, badges[badge].color);
	}
}

applyBadges();

function addTitle(user, prefix, suffix)
{
	pageUser = document.getElementsByClassName("login");
	if (pageUser)
		if (pageUser[0].textContent == user)
			pageUser[0].textContent = prefix + " " + user + " " + suffix;
}


async function applyTitles() {
	const requestURL = "https://raw.githubusercontent.com/seekrs/improved-seekrs/main/data/titles.json";
  	const request = new Request(requestURL);

	const response = await fetch(request);
	const titles = await response.json();

	for (title in titles)
	{
		addTitle(titles[title].user, titles[title].prefix, titles[title].suffix);
	}
}

applyTitles();
