(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function ($) {
    var Todo = (function () {
        function Todo(value) {
            _classCallCheck(this, Todo);

            this.isCompleted = false;
            this.value = value;
            this.setElement();
            this.bindEvents();
            this.render();
        }

        _createClass(Todo, [{
            key: 'bindEvents',
            value: function bindEvents() {
                this.element.on('dblclick', '.text', this.edit.bind(this));
                this.element.on('focusout', '.edit', this.update.bind(this));
                this.element.on('keyup', '.edit', this.update.bind(this));
                this.element.on('click', '.remove', this.destroy.bind(this));
                this.element.on('change', '.toggle', this.toggle.bind(this));
            }
        }, {
            key: 'edit',
            value: function edit() {
                this.element.children('.content').hide();
                this.element.children('.edit').show().focus();
            }
        }, {
            key: 'update',
            value: function update(e) {
                if (e.type === 'keyup' && e.which !== 13) return;
                this.value = this.element.children('.edit').val().trim();
                this.render();
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.element.remove();
            }
        }, {
            key: 'render',
            value: function render() {
                this.element.children('.edit').hide().val(this.value);
                this.element.children('.content').show().find('.text').text(this.value);
            }
        }, {
            key: 'toggle',
            value: function toggle() {
                this.isCompleted = this.element.find('.toggle').prop('checked');
                var todoText = this.element.find('.text');
                this.isCompleted ? todoText.addClass('completed') : todoText.removeClass('completed');
            }
        }, {
            key: 'setElement',
            value: function setElement() {
                var html = '<li class="list-group-item todo-item">\n                            <div class="content">\n                              <input type="checkbox" class="toggle">\n                              <label class="control-label text">' + this.value + '</label>\n                              <span class="glyphicon glyphicon-remove pull-right remove"></span>\n                            </div>\n                            <input class="edit form-control" value="' + this.value + '">\n                          </li>';
                this.element = $(html);
                this.element.appendTo('#todo-list');
            }
        }]);

        return Todo;
    })();

    var createTodo = function createTodo(e) {
        if (e.which !== 13) return;
        var value = $(e.target).val().trim();
        $(e.target).val('');
        new Todo(value);
    };

    $(document).on('keyup', '#new-todo', createTodo);
})(jQuery);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvSVRQVXNlci9BcHBsaWNhdGlvbnMvamF2YXNjcmlwdC9lczIwMTUvanMvZXMyMDE1LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsQ0FBQyxVQUFDLENBQUMsRUFBSztRQUNFLElBQUk7QUFDSyxpQkFEVCxJQUFJLENBQ00sS0FBSyxFQUFFO2tDQURqQixJQUFJOztBQUVGLGdCQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztBQUN6QixnQkFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsZ0JBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNsQixnQkFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ2xCLGdCQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7O3FCQVBDLElBQUk7O21CQVNJLHNCQUFHO0FBQ1Qsb0JBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM3RCxvQkFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQy9ELG9CQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUssT0FBTyxFQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDL0Qsb0JBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBSyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNoRSxvQkFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFJLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ2xFOzs7bUJBRUcsZ0JBQUc7QUFDSCxvQkFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekMsb0JBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2pEOzs7bUJBRUssZ0JBQUMsQ0FBQyxFQUFFO0FBQ04sb0JBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUUsT0FBTztBQUNoRCxvQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6RCxvQkFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2pCOzs7bUJBRU0sbUJBQUc7QUFDTixvQkFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN6Qjs7O21CQUVLLGtCQUFHO0FBQ0wsb0JBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEQsb0JBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNFOzs7bUJBRUssa0JBQUc7QUFDTCxvQkFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDaEUsb0JBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLG9CQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN6Rjs7O21CQUVTLHNCQUFHO0FBQ1Qsb0JBQU0sSUFBSSx5T0FHNEMsSUFBSSxDQUFDLEtBQUssNE5BR04sSUFBSSxDQUFDLEtBQUssd0NBQ2hELENBQUM7QUFDckIsb0JBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLG9CQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN2Qzs7O2VBdERDLElBQUk7OztBQXlEVixRQUFNLFVBQVUsR0FBRyxTQUFiLFVBQVUsQ0FBSSxDQUFDLEVBQUs7QUFDdEIsWUFBRyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRSxPQUFPO0FBQzFCLFlBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDdkMsU0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDcEIsWUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkIsQ0FBQzs7QUFFRixLQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7Q0FFcEQsQ0FBQSxDQUFFLE1BQU0sQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIigoJCkgPT4ge1xuICAgIGNsYXNzIFRvZG8ge1xuICAgICAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5zZXRFbGVtZW50KCk7XG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm9uKCdkYmxjbGljaycsICcudGV4dCcsICAgdGhpcy5lZGl0LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm9uKCdmb2N1c291dCcsICcuZWRpdCcsICAgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub24oJ2tleXVwJywgICAgJy5lZGl0JywgICB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5vbignY2xpY2snLCAgICAnLnJlbW92ZScsIHRoaXMuZGVzdHJveS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5vbignY2hhbmdlJywgICAnLnRvZ2dsZScsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWRpdCgpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jaGlsZHJlbignLmNvbnRlbnQnKS5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2hpbGRyZW4oJy5lZGl0Jykuc2hvdygpLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGUoZSkge1xuICAgICAgICAgICAgaWYoZS50eXBlID09PSAna2V5dXAnICYmIGUud2hpY2ggIT09IDEzKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5lbGVtZW50LmNoaWxkcmVuKCcuZWRpdCcpLnZhbCgpLnRyaW0oKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNoaWxkcmVuKCcuZWRpdCcpLmhpZGUoKS52YWwodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2hpbGRyZW4oJy5jb250ZW50Jykuc2hvdygpLmZpbmQoJy50ZXh0JykudGV4dCh0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSB0aGlzLmVsZW1lbnQuZmluZCgnLnRvZ2dsZScpLnByb3AoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9UZXh0ID0gdGhpcy5lbGVtZW50LmZpbmQoJy50ZXh0Jyk7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGVkID8gdG9kb1RleHQuYWRkQ2xhc3MoJ2NvbXBsZXRlZCcpIDogdG9kb1RleHQucmVtb3ZlQ2xhc3MoJ2NvbXBsZXRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0RWxlbWVudCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHRvZG8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJ0b2dnbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWwgdGV4dFwiPiR7dGhpcy52YWx1ZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBwdWxsLXJpZ2h0IHJlbW92ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJlZGl0IGZvcm0tY29udHJvbFwiIHZhbHVlPVwiJHt0aGlzLnZhbHVlfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPmA7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSAkKGh0bWwpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZFRvKCcjdG9kby1saXN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUb2RvID0gKGUpID0+IHtcbiAgICAgICAgaWYoZS53aGljaCAhPT0gMTMpIHJldHVybjtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAkKGUudGFyZ2V0KS52YWwoKS50cmltKCk7XG4gICAgICAgICQoZS50YXJnZXQpLnZhbCgnJyk7XG4gICAgICAgIG5ldyBUb2RvKHZhbHVlKTtcbiAgICB9O1xuXG4gICAgJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNuZXctdG9kbycsIGNyZWF0ZVRvZG8pO1xuXG59KShqUXVlcnkpO1xuIl19
