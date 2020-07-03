export const EmojiPicker = "EmojiPicker";

export function getGroups() {
	const groupsString = localStorage.getItem(EmojiPicker);
	const groups = JSON.parse(groupsString);
	// TODO: Add a try/catch.
	return groups;
}

export function saveGroup(name, characters) {
	const existingGroups = getGroups();
	const allGroups = [...existingGroups, {name, characters}];
	const groupString = JSON.stringify(allGroups);

	localStorage.setItem(EmojiPicker, groupString);
}
