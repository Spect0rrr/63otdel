document.getElementById('agree').addEventListener('change', function() {
    if (this.checked) {
        alert('Вы приняли условия пользовательского соглашения');
    }
});

function GoToAdminData() {
    window.location.href = "admin-data.html";
};

function GoToData() {
    // window.location.href = "data.html";
    window.location.href = "admin-panel.html"
};

function AdminPanel() {
    window.location.href = "admin-panel.html";
};

function DeleteUser() {
    window.location.href = "admin-panel.html"
    alert("Вы успешно удалили сотрудника из базы данных")
};

function BackFromDeleting() {
    window.location.href = "admin-panel.html"
};

function GoToAddUser() {
    window.location.href = "add-new-user.html"
};

function GoToOtdelPlans() {
    window.location.href = "otdel-plans.html"
};

function GoToDeleteUser() {
    window.location.href = "delete-user.html"
};

function GoToUserPlans() {
    window.location.href = "user-plans.html"
};

function AddUser() {
    window.location.href = "admin-panel.html";
    alert("Вы успешно добавили сотрудника и добавили его в план отдела")
};

function StartPanel() {
    window.location.href = "auntification.html"
};

function ChangeUserPlan() {
    window.location.href = "admin-panel.html";
    alert("Вы успешно изменили личный план сотрудника")
}
