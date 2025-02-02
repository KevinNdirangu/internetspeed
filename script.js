document.addEventListener('DOMContentLoaded', function () {
    const statusElement = document.getElementById('status');
    const speedElement = document.getElementById('speed');

    async function checkInternet() {
        try {
            const response = await fetch('https://www.google.com', { method: 'HEAD', mode: 'no-cors' });
            if (response.ok) {
                statusElement.textContent = 'Internet Working';
                statusElement.style.color = 'green';
                const { download, upload } = await testSpeed();
                speedElement.textContent = `Download: ${download.toFixed(2)} Mbps, Upload: ${upload.toFixed(2)} Mbps`;
            } else {
                statusElement.textContent = 'No Internet';
                statusElement.style.color = 'red';
                speedElement.textContent = '';
            }
        } catch (error) {
            statusElement.textContent = 'No Internet';
            statusElement.style.color = 'red';
            speedElement.textContent = '';
        }
    }

    async function testSpeed() {
        // Simulated speed test; replace this with an actual speed test API if available
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    download: Math.random() * 100, // Random value for download speed in Mbps
                    upload: Math.random() * 100,   // Random value for upload speed in Mbps
                });
            }, 2000);
        });
    }

    // Initial check
    checkInternet();

    // Check every 5 seconds
    setInterval(checkInternet, 5000);
});
