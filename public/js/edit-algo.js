function delete(idx) {
	var apiKey = document.getElementById('delete_api_key').value;
	window.location.href = "/edit-algo?api_key="+apiKey+"&remove="+idx;
}

function test() {
	var apiKey = document.getElementById('test_api_key').value;
	window.location.href = "/test-algo?api_key="+apiKey;
}