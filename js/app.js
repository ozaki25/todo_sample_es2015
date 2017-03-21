(function($) {
    var Todo = function(value) {
        this.isCompleted = false;
        this.value = value;
        this.setElement();
        this.bindEvents();
        this.render();
    };

    Todo.prototype.bindEvents = function() {
        this.element.on('dblclick', '.text',   this.edit.bind(this));
        this.element.on('focusout', '.edit',   this.update.bind(this));
        this.element.on('keyup',    '.edit',   this.update.bind(this));
        this.element.on('click',    '.remove', this.destroy.bind(this));
        this.element.on('change',   '.toggle', this.toggle.bind(this));
    };

    Todo.prototype.edit = function() {
        this.element.children('.content').hide();
        this.element.children('.edit').show().focus();
    };

    Todo.prototype.update = function(e) {
        if(e.type === 'keyup' && e.which !== 13) return;
        this.value = this.element.children('.edit').val().trim();
        this.render();
    };

    Todo.prototype.destroy = function() {
        this.element.remove();
    };

    Todo.prototype.render = function() {
        this.element.children('.edit').hide().val(this.value);
        this.element.children('.content').show().find('.text').text(this.value);
    };

    Todo.prototype.toggle = function() {
        this.isCompleted = this.element.find('.toggle').prop('checked');
        var todoText = this.element.find('.text');
        this.isCompleted ? todoText.addClass('completed') : todoText.removeClass('completed');
    };

    Todo.prototype.setElement = function() {
        var html = '<li class="list-group-item todo-item">' +
                     '<div class="content">' +
                       '<input type="checkbox" class="toggle">' +
                       '<label class="control-label text">' + this.value + '</label>' +
                       '<span class="glyphicon glyphicon-remove pull-right remove"></span>' +
                     '</div>' +
                     '<input class="edit form-control" value="' + this.value + '">' +
                   '</li>';
        this.element = $(html);
        this.element.appendTo('#todo-list');
    };

    $(function() {
        var createTodo = function(e) {
            if(e.which !== 13) return;
            var value = $(e.target).val().trim();
            $(e.target).val('');
            new Todo(value);
        };

        $(document).on('keyup', '#new-todo', createTodo);
    });

})(jQuery);
