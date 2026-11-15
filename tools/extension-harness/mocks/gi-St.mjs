const settings = {enable_animations: true};
class Actor {
    constructor(props = {}) { Object.assign(this, props); this.children = []; this.visible = true; }
    add_child(child) { this.children.push(child); }
    insert_child_below(child, sibling) {
        const at = this.children.indexOf(sibling);
        this.children.splice(at < 0 ? this.children.length : at, 0, child);
    }
    destroy_all_children() { this.children = []; }
    destroy() {}
}
export default {
    Settings: {get: () => settings},
    BoxLayout: class extends Actor {},
    Icon: class extends Actor {},
    Label: class extends Actor {},
    Bin: class extends Actor {},
};
