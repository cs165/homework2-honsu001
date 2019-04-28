const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

var new_text = "";

function transformTextNodes(node) { 
  // TODO(you): Implement this function! See HW spec for details.
	if(node.nodeType === Node.TEXT_NODE && node.nodeName !== '<script>' && node.nodeName !== '<style>'){
		var text = node.textContent.trim();
		var words = text.split(/\s+|\n+/);
	  
		for(var i = 0;i < words.length;i++){
			if (MATCH_LIST[words[i]]){
				words[i] = MATCH_LIST[words[i]];
			}
			new_text += words[i] + " ";
			node.textContent = new_text;
		}
		new_text = "";
	} 
	else{
		for(const child of node.childNodes){
			transformTextNodes(child);
		}
	}
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');

console.log('Extension updated');
