export const EmojiPicker = "EmojiPicker";

export function getGroups() {
	const groupsString = localStorage.getItem(EmojiPicker);
	const groups = JSON.parse(groupsString);
	// TODO: Add a try/catch.
	return groups;
}

export function saveGroup(name, emojiString) {
	const existingGroups = getGroups();
	const allGroups = [...existingGroups, {[name]: emojiString}];
	const groupString = JSON.stringify(allGroups);

	localStorage.setItem(EmojiPicker, groupString);
}
