const projectData = {
    grab: {
        title: "Grab AI Destination Explorer",
        links: [
            { text: "App Repository", url: "https://github.com/cverrell07/Destination-Explorer-SolaGratia", logo: "./assets/github-logo.png"},
            { text: "AI Module", url: "https://github.com/cverrell07/destination-explorer-ai-module", logo: "./assets/github-logo.png"},
            { text: "Ptch Deck", url: "https://drive.google.com/file/d/1YcdJF06x8uXC-BJdQGabAflKS23PSvJ7/view?usp=sharing", logo: "./assets/pdf-logo.png"}
        ]
    },
    libeery: {
        title: "Libeery",
        links: [
            { text: "Notion", url: "https://slow-headlight-e6d.notion.site/Libeery-82db6e44b97b46e0b6ef326f6c283b65?pvs=4", logo: "./assets/notion-logo.png"},
            { text: "App Repository", url: "https://github.com/cverrell07/Libeery-App", logo: "./assets/github-logo.png"},
            { text: "UI/UX Design", url: "https://www.figma.com/design/RjVv3tG32HVFfgXFLUPjFg/Libeery?node-id=81-265&t=A9RspXmpbXjSlAkM-1", logo: "./assets/figma-logo.png"},
        ]
    },
    "lapak-kita": {
        title: "lapak kita",
        links: [
            { text: "GitHub", url: "https://github.com/cverrell07/HCI-Lapak-Kita", logo: "./assets/github-logo.png"},
            { text: "UI/UX Design", url: "https://www.figma.com/design/xoEt1RbEbRCb26M36SdTZu/lapak-kita?node-id=313-1658&t=aG05SUG0xmdtoMld-1", logo: "./assets/figma-logo.png"}
        ]
    },
    cookability: {
        title: "cookability",
        links: [
            { text: "Prototype", url: "https://www.figma.com/design/x4c4ZOagoWKRHaJxyBdhEX/cookability?node-id=0-1&t=Heod0MzrUbNwjK6r-1", logo: "./assets/figma-logo.png"},
        ]
    }
};

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalLinks = document.getElementById("modalLinks");
const closeModal = document.getElementsByClassName("close")[0];

function openModal(project) {
    const data = projectData[project];
    
    modalTitle.innerText = data.title;
    
    modalLinks.innerHTML = ""; 
    data.links.forEach(link => {
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.target = "_blank";
        anchor.innerHTML = `<img src="${link.logo}" alt="logo">${link.text}`;
        modalLinks.appendChild(anchor); 
    });
    
    modal.style.display = "block";
}

document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', function() {
        const project = this.getAttribute('data-project');
        openModal(project);
    });
});

closeModal.onclick = function() {
    modal.style.display = "none";
};

document.querySelector('.projects-button').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});