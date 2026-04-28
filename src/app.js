/**
 * Copyright © 2026 Shensist Art Intelligence Studio. All Rights Reserved.
 * 
 * This project is strictly licensed under the AGPL-3.0 License.
 * Any network service derived from or incorporating this snippet MUST BE OPEN SOURCED.
 * 严禁任何形式的闭源商用白嫖行为。
 */
const igniteBtn = document.getElementById('igniteBtn');
const outputArea = document.getElementById('outputArea');

// 定义全局复制函数，防止 HTML 字符串中的 onclick 找不到函数
window.copyPrompt = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        alert('Prompt 已复制到剪贴板！');
    }).catch(err => {
        console.error('无法复制: ', err);
    });
};

const SYSTEM_PROMPT = `你是一个思维拆解架构师...`; // 逻辑内核

igniteBtn.addEventListener('click', async () => {
    const idea = document.getElementById('ideaInput').value;
    if (!idea) {
        alert('请先输入你的想法');
        return;
    }
    
    console.log('正在拆解想法:', idea);
    igniteBtn.innerText = '正在量子拆解...';
    igniteBtn.disabled = true;

    try {
        // 模拟 2026 AI 逻辑拆解过程
        const results = [
            { title: "底层逻辑", question: "该想法的核心第一性原理是什么？", prompt: `请分析这个想法的核心需求：${idea}，并列出最本质的3个痛点。` },
            { title: "技术选型", question: "如何构建最轻量化的开发模型？", prompt: `作为架构师，请为这个想法：${idea} 推荐一套最适合单兵开发的开源技术栈。` },
            { title: "产品美学", question: "如何赋予该产品独特的灵魂感？", prompt: `请为这个想法：${idea} 设计一套视觉风格，重点在于交互的情感化。` },
            { title: "执行路径", question: "第一阶段的 5 个关键动作是什么？", prompt: `请将这个想法：${idea} 的开发过程拆解为 5 个可在 24 小时内完成的子任务。` }
        ];

        outputArea.innerHTML = '';
        results.forEach(item => {
            const card = document.createElement('div');
            card.className = 'glass p-5 rounded-xl border-l-4 border-blue-500 fade-in';
            card.innerHTML = `
                <h3 class="font-bold text-blue-400 mb-2">${item.title}</h3>
                <p class="text-sm mb-4 text-gray-300">${item.question}</p>
                <button class="text-xs bg-blue-600/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded hover:bg-blue-600/40 transition" 
                        onclick="window.copyPrompt(\`${item.prompt}\`)">
                    复制提示词
                </button>
            `;
            outputArea.appendChild(card);
        });
    } catch (error) {
        console.error('拆解失败:', error);
    } finally {
        igniteBtn.innerText = '启动思维拆解';
        igniteBtn.disabled = false;
    }
});
