/**
 * CẤU HÌNH LINKS CHO WEBSITE
 * Anh paste link vào giữa dấu ngoặc kép "" nhé.
 * Nếu chưa có link thì để nguyên dấu #
 */
const WEBSITE_LINKS = {
    // --- TRANG CHỦ (index.html) ---
    buyMonarc: "https://app.uniswap.org/",      // Nút BUY $MONARC
    claimBadge: "http://127.0.0.1:5500/ecosystem.html#",           // Nút Claim Monarc Badge
    joinCourt: "https://x.com/monarc_space", // Nút Join the Court (X)

    // --- TRANG ECOSYSTEM (ecosystem.html) ---
    gameDrop: "#",          // Monarc Drop (Drop It)
    gameChests: "#",        // Degen Chests (Open Now)
    gameStaking: "#",       // Staking Vault (Coming Soon)
    gameWheel: "#"          // Fortune Wheel (Loading...)
};

/**
 * ĐOẠN CODE BÊN DƯỚI SẼ TỰ ĐỘNG GẮN LINK VÀO CÁC NÚT
 * Anh không cần sửa gì ở dưới này đâu nhé.
 */
document.addEventListener('DOMContentLoaded', () => {
    const setLink = (id, url) => {
        const el = document.getElementById(id);
        if (el) {
            el.href = url;
            // Nếu link khác # thì mở tab mới
            if (url && url !== '#' && !url.startsWith('javascript')) {
                el.target = '_blank';
                el.rel = 'noopener noreferrer';
            }
        }
    };

    // Index.html IDs
    setLink('btn-buy-monarc', WEBSITE_LINKS.buyMonarc);
    setLink('btn-claim-badge', WEBSITE_LINKS.claimBadge);
    setLink('btn-join-court', WEBSITE_LINKS.joinCourt);

    // Ecosystem.html IDs
    setLink('btn-game-drop', WEBSITE_LINKS.gameDrop);
    setLink('btn-game-chests', WEBSITE_LINKS.gameChests);
    setLink('btn-game-staking', WEBSITE_LINKS.gameStaking);
    setLink('btn-game-wheel', WEBSITE_LINKS.gameWheel);
});
