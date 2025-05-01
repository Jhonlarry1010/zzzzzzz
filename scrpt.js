document.getElementById('open-folder').addEventListener('click', async () => {
    if (window.showDirectoryPicker) {
        try {
            const directoryHandle = await window.showDirectoryPicker();
            console.log('Folder selected:', directoryHandle.name);
            // Handle folder contents here
        } catch (err) {
            console.error('Folder selection canceled or failed:', err);
        }
    } else {
        alert('Your browser does not support the File System Access API.');
    }
});
