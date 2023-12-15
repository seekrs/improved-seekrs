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
addTag("adjoly", "Forked from", "#D950FF");
addTag("randria", "Impostor", "#FF6950");
addTag("grandria", "Impostor", "#FF6950");
