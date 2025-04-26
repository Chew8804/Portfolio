document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.view-more-btn').forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-project');
            const modal = document.getElementById(`modal-${projectId}`);
            modal.classList.remove('hidden');
        });
    });

    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').classList.add('hidden');
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.add('hidden');
        }
    });
});
