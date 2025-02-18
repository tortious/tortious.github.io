 <!-- JavaScript to Load RSS Feed -->
    <script>
        async function loadRSS() {
            const rssUrl = 'https://tortious.github.io/rss.xml'; // Assuming RSS file is local; update if hosted externally
            try {
                const response = await fetch(rssUrl);
                const text = await response.text();
                const parser = new DOMParser();
                const xml = parser.parseFromString(text, "application/xml");

                const items = xml.querySelectorAll("item");
                const feedContainer = document.getElementById("rss-feed");
                feedContainer.innerHTML = '';

                items.forEach((item, index) => {
                    if (index >= 5) return; // Show latest 5 entries
                    const title = item.querySelector("title").textContent;
                    const link = item.querySelector("link").textContent;
                    const description = item.querySelector("description").textContent;
                    const pubDate = new Date(item.querySelector("pubDate").textContent).toLocaleDateString();

                    const listItem = document.createElement("li");
                    listItem.innerHTML = `
                        <a href="${link}" target="_blank">
                            <strong>${title}</strong> <br>
                            <small>${pubDate}</small> <br>
                            ${description}
                        </a>
                    `;
                    feedContainer.appendChild(listItem);
                });
            } catch (error) {
                console.error("Error loading RSS feed:", error);
            }
        }

        document.addEventListener("DOMContentLoaded", loadRSS);
    </script>
