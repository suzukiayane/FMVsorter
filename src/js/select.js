addEventListener("load", () => {
	document.getElementById('selectAllCheckbox').addEventListener('change', function () 
	{		
		let checkboxes = document.querySelectorAll('.checkboxes');
		checkboxes.forEach(function (checkbox) 
		{
			checkbox.checked = this.checked;
		}, this);
		
		var checkBoxVar = document.getElementById('selectAllCheckbox');
		var checkBoxLabel = document.getElementById('selectAllLabel');
		if (!checkBoxVar.checked) 
		{
			document.querySelector('#selectAllLabel .label-text').textContent = ' Select All';
		}
		else 
		{
			document.querySelector('#selectAllLabel .label-text').textContent = ' Unselect All';
		}
	});
});