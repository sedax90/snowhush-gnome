const GLib = {
    PRIORITY_DEFAULT: 0, PRIORITY_LOW: 300, SOURCE_REMOVE: false,
    Bytes: class { constructor(data) { this.data = data; } get_size() { return this.data.length; } },
    timeout_add_seconds(p, s, fn) { globalThis.timeouts.push(fn); return globalThis.timeouts.length; },
    timeout_add(p, ms, fn) { const id = 1000 + (globalThis.sourceNext = (globalThis.sourceNext ?? 0) + 1); (globalThis.sources ??= new Map()).set(id, fn); return id; },
    source_remove(id) { globalThis.sources?.delete(id); },
    SOURCE_CONTINUE: true,
    get_monotonic_time() { return Date.now() * 1000; },
    get_language_names() { return ['pl_PL.UTF-8', 'pl_PL', 'pl.UTF-8', 'pl', 'C']; },
};
export default GLib;
