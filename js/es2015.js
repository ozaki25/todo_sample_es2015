(($) => {
    class Todo {
        constructor(value) {
            this.isCompleted = false;
            this.value = value;
            this.setElement();
            this.bindEvents();
            this.render();
        }

        bindEvents() {
            this.element.on('dblclick', '.text',   this.edit.bind(this));
            this.element.on('focusout', '.edit',   this.update.bind(this));
            this.element.on('keyup',    '.edit',   this.update.bind(this));
            this.element.on('click',    '.remove', this.destroy.bind(this));
            this.element.on('change',   '.toggle', this.toggle.bind(this));
        }

        edit() {
            this.element.children('.content').hide();
            this.element.children('.edit').show().focus();
        }

        update(e) {
            if(e.type === 'keyup' && e.which !== 13) return;
            this.value = this.element.children('.edit').val().trim();
            this.render();
        }

        destroy() {
            this.element.remove();
        }

        render() {
            this.element.children('.edit').hide().val(this.value);
            this.element.children('.content').show().find('.text').text(this.value);
        }

        toggle() {
            this.isCompleted = this.element.find('.toggle').prop('checked');
            const todoText = this.element.find('.text');
            this.isCompleted ? todoText.addClass('completed') : todoText.removeClass('completed');
        }

        setElement() {
            const html = `<li class="list-group-item todo-item">
                            <div class="content">
                              <input type="checkbox" class="toggle">
                              <label class="control-label text">${this.value}</label>
                              <span class="glyphicon glyphicon-remove pull-right remove"></span>
                            </div>
                            <input class="edit form-control" value="${this.value}">
                          </li>`;
            this.element = $(html);
            this.element.appendTo('#todo-list');
        }
    }

    const createTodo = (e) => {
        if(e.which !== 13) return;
        const value = $(e.target).val().trim();
        $(e.target).val('');
        new Todo(value);
    };

    $(document).on('keyup', '#new-todo', createTodo);

})(jQuery);
