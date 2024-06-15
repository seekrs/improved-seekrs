// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   shared.js                                          :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: kiroussa <oss@xtrm.me>                     +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2024/06/11 04:49:23 by kiroussa          #+#    #+#             //
//   Updated: 2024/06/15 11:42:24 by kiroussa         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

const repoRawUrl = "https://raw.githubusercontent.com/seekrs/improved-seekrs/rework";

const seekrsCoalitionId = 219;

function isSeekrsProfile() {
	const coalitionBlock = document.getElementsByClassName("coalition-name");
	if (coalitionBlock.length == 0)
		return false;
	const coalitionId = coalitionBlock[0].querySelector("a");
	if (coalitionId?.href == null)
		return false;
	const coalitionIdValue = coalitionId.href.split("/").findLast(v => true);
	return (coalitionIdValue === `${seekrsCoalitionId}`);
}
