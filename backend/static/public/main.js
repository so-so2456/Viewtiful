
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
<<<<<<< HEAD
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    // Adapted from https://github.com/then/is-promise/blob/master/index.js
    // Distributed under MIT License https://github.com/then/is-promise/blob/master/LICENSE
    function is_promise(value) {
        return !!value && (typeof value === 'object' || typeof value === 'function') && typeof value.then === 'function';
    }
=======
>>>>>>> develop
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    let src_url_equal_anchor;
    function src_url_equal(element_src, url) {
        if (!src_url_equal_anchor) {
            src_url_equal_anchor = document.createElement('a');
        }
        src_url_equal_anchor.href = url;
        return element_src === src_url_equal_anchor.href;
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
<<<<<<< HEAD
    function create_slot(definition, ctx, $$scope, fn) {
        if (definition) {
            const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
            return definition[0](slot_ctx);
        }
    }
    function get_slot_context(definition, ctx, $$scope, fn) {
        return definition[1] && fn
            ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
            : $$scope.ctx;
    }
    function get_slot_changes(definition, $$scope, dirty, fn) {
        if (definition[2] && fn) {
            const lets = definition[2](fn(dirty));
            if ($$scope.dirty === undefined) {
                return lets;
            }
            if (typeof lets === 'object') {
                const merged = [];
                const len = Math.max($$scope.dirty.length, lets.length);
                for (let i = 0; i < len; i += 1) {
                    merged[i] = $$scope.dirty[i] | lets[i];
                }
                return merged;
            }
            return $$scope.dirty | lets;
        }
        return $$scope.dirty;
    }
    function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
        if (slot_changes) {
            const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
            slot.p(slot_context, slot_changes);
        }
    }
    function get_all_dirty_from_scope($$scope) {
        if ($$scope.ctx.length > 32) {
            const dirty = [];
            const length = $$scope.ctx.length / 32;
            for (let i = 0; i < length; i++) {
                dirty[i] = -1;
            }
            return dirty;
        }
        return -1;
    }
    function exclude_internal_props(props) {
        const result = {};
        for (const k in props)
            if (k[0] !== '$')
                result[k] = props[k];
        return result;
    }
    function compute_rest_props(props, keys) {
        const rest = {};
        keys = new Set(keys);
        for (const k in props)
            if (!keys.has(k) && k[0] !== '$')
                rest[k] = props[k];
        return rest;
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);
=======
>>>>>>> develop
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function svg_element(name) {
        return document.createElementNS('http://www.w3.org/2000/svg', name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function prevent_default(fn) {
        return function (event) {
            event.preventDefault();
            // @ts-ignore
            return fn.call(this, event);
        };
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function set_svg_attributes(node, attributes) {
        for (const key in attributes) {
            attr(node, key, attributes[key]);
        }
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_input_value(input, value) {
        input.value = value == null ? '' : value;
    }
<<<<<<< HEAD
    function toggle_class(element, name, toggle) {
        element.classList[toggle ? 'add' : 'remove'](name);
    }
=======
>>>>>>> develop
    function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, cancelable, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
<<<<<<< HEAD
    function get_current_component() {
        if (!current_component)
            throw new Error('Function called outside component initialization');
        return current_component;
    }
    /**
     * The `onMount` function schedules a callback to run as soon as the component has been mounted to the DOM.
     * It must be called during the component's initialisation (but doesn't need to live *inside* the component;
     * it can be called from an external module).
     *
     * `onMount` does not run inside a [server-side component](/docs#run-time-server-side-component-api).
     *
     * https://svelte.dev/docs#run-time-svelte-onmount
     */
    function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
    }
=======
>>>>>>> develop

    const dirty_components = [];
    const binding_callbacks = [];
    let render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = /* @__PURE__ */ Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    function add_flush_callback(fn) {
        flush_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        // Do not reenter flush while dirty components are updated, as this can
        // result in an infinite loop. Instead, let the inner flush handle it.
        // Reentrancy is ok afterwards for bindings etc.
        if (flushidx !== 0) {
            return;
        }
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            try {
                while (flushidx < dirty_components.length) {
                    const component = dirty_components[flushidx];
                    flushidx++;
                    set_current_component(component);
                    update(component.$$);
                }
            }
            catch (e) {
                // reset dirty state to not end up in a deadlocked state and then rethrow
                dirty_components.length = 0;
                flushidx = 0;
                throw e;
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    /**
     * Useful for example to execute remaining `afterUpdate` callbacks before executing `destroy`.
     */
    function flush_render_callbacks(fns) {
        const filtered = [];
        const targets = [];
        render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
        targets.forEach((c) => c());
        render_callbacks = filtered;
    }
    const outroing = new Set();
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
<<<<<<< HEAD
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
        else if (callback) {
            callback();
        }
    }

    function handle_promise(promise, info) {
        const token = info.token = {};
        function update(type, index, key, value) {
            if (info.token !== token)
                return;
            info.resolved = value;
            let child_ctx = info.ctx;
            if (key !== undefined) {
                child_ctx = child_ctx.slice();
                child_ctx[key] = value;
            }
            const block = type && (info.current = type)(child_ctx);
            let needs_flush = false;
            if (info.block) {
                if (info.blocks) {
                    info.blocks.forEach((block, i) => {
                        if (i !== index && block) {
                            group_outros();
                            transition_out(block, 1, 1, () => {
                                if (info.blocks[i] === block) {
                                    info.blocks[i] = null;
                                }
                            });
                            check_outros();
                        }
                    });
                }
                else {
                    info.block.d(1);
                }
                block.c();
                transition_in(block, 1);
                block.m(info.mount(), info.anchor);
                needs_flush = true;
            }
            info.block = block;
            if (info.blocks)
                info.blocks[index] = block;
            if (needs_flush) {
                flush();
            }
        }
        if (is_promise(promise)) {
            const current_component = get_current_component();
            promise.then(value => {
                set_current_component(current_component);
                update(info.then, 1, info.value, value);
                set_current_component(null);
            }, error => {
                set_current_component(current_component);
                update(info.catch, 2, info.error, error);
                set_current_component(null);
                if (!info.hasCatch) {
                    throw error;
                }
            });
            // if we previously had a then/catch block, destroy it
            if (info.current !== info.pending) {
                update(info.pending, 0);
                return true;
            }
        }
        else {
            if (info.current !== info.then) {
                update(info.then, 1, info.value, promise);
                return true;
            }
            info.resolved = promise;
        }
    }
    function update_await_block_branch(info, ctx, dirty) {
        const child_ctx = ctx.slice();
        const { resolved } = info;
        if (info.current === info.then) {
            child_ctx[info.value] = resolved;
        }
        if (info.current === info.catch) {
            child_ctx[info.error] = resolved;
        }
        info.block.p(child_ctx, dirty);
    }

    function get_spread_update(levels, updates) {
        const update = {};
        const to_null_out = {};
        const accounted_for = { $$scope: 1 };
        let i = levels.length;
        while (i--) {
            const o = levels[i];
            const n = updates[i];
            if (n) {
                for (const key in o) {
                    if (!(key in n))
                        to_null_out[key] = 1;
                }
                for (const key in n) {
                    if (!accounted_for[key]) {
                        update[key] = n[key];
                        accounted_for[key] = 1;
                    }
                }
                levels[i] = n;
            }
            else {
                for (const key in o) {
                    accounted_for[key] = 1;
                }
            }
        }
        for (const key in to_null_out) {
            if (!(key in update))
                update[key] = undefined;
        }
        return update;
    }
    function get_spread_object(spread_props) {
        return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
    }

    function bind(component, name, callback) {
        const index = component.$$.props[name];
        if (index !== undefined) {
            component.$$.bound[index] = callback;
            callback(component.$$.ctx[index]);
        }
    }
    function create_component(block) {
        block && block.c();
    }
=======
>>>>>>> develop
    function mount_component(component, target, anchor, customElement) {
        const { fragment, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
                // if the component was destroyed immediately
                // it will update the `$$.on_destroy` reference to `null`.
                // the destructured on_destroy may still reference to the old array
                if (component.$$.on_destroy) {
                    component.$$.on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            flush_render_callbacks($$.after_update);
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: [],
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            if (!is_function(callback)) {
                return noop;
            }
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.59.2' }, detail), { bubbles: true }));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation, has_stop_immediate_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        if (has_stop_immediate_propagation)
            modifiers.push('stopImmediatePropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.data === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
<<<<<<< HEAD
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
=======
>>>>>>> develop
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

<<<<<<< HEAD
    const search = {
        search: {
            width: 1664,
            height: 1792,
            paths: [
                {
                    d: 'M1152 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zM1664 1664q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z'
                }
            ]
        }
    };

    const film = {
        film: {
            width: 1920,
            height: 1792,
            paths: [
                {
                    d: 'M384 1600v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM384 1216v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM384 832v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM1408 1600v-512q0-26-19-45t-45-19h-768q-26 0-45 19t-19 45v512q0 26 19 45t45 19h768q26 0 45-19t19-45zM384 448v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM1792 1600v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM1408 832v-512q0-26-19-45t-45-19h-768q-26 0-45 19t-19 45v512q0 26 19 45t45 19h768q26 0 45-19t19-45zM1792 1216v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM1792 832v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM1792 448v-128q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v128q0 26 19 45t45 19h128q26 0 45-19t19-45zM1920 288v1344q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1344q0-66 47-113t113-47h1600q66 0 113 47t47 113z'
                }
            ]
        }
    };

    /* node_modules/svelte-awesome/package/components/svg/Raw.svelte generated by Svelte v3.59.2 */

    const file$4 = "node_modules/svelte-awesome/package/components/svg/Raw.svelte";

    function create_fragment$5(ctx) {
    	let g;

    	const block = {
    		c: function create() {
    			g = svg_element("g");
    			add_location(g, file$4, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, g, anchor);
    			g.innerHTML = /*raw*/ ctx[0];
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*raw*/ 1) g.innerHTML = /*raw*/ ctx[0];		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(g);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Raw', slots, []);
    	let cursor = 0xd4937;

    	function getId() {
    		cursor += 1;
    		return `fa-${cursor.toString(16)}`;
    	}

    	let raw = '';
    	let { data } = $$props;

    	function getRaw(data) {
    		if (!data || !data.raw) {
    			return '';
    		}

    		let rawData = data.raw;
    		const ids = {};

    		rawData = rawData.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g, (match, id) => {
    			const uniqueId = getId();
    			ids[id] = uniqueId;
    			return ` id="${uniqueId}"`;
    		});

    		rawData = rawData.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, (match, rawId, _, pointerId) => {
    			const id = rawId || pointerId;

    			if (!id || !ids[id]) {
    				return match;
    			}

    			return `#${ids[id]}`;
    		});

    		return rawData;
    	}

    	$$self.$$.on_mount.push(function () {
    		if (data === undefined && !('data' in $$props || $$self.$$.bound[$$self.$$.props['data']])) {
    			console.warn("<Raw> was created without expected prop 'data'");
    		}
    	});

    	const writable_props = ['data'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Raw> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('data' in $$props) $$invalidate(1, data = $$props.data);
    	};

    	$$self.$capture_state = () => ({ cursor, getId, raw, data, getRaw });

    	$$self.$inject_state = $$props => {
    		if ('cursor' in $$props) cursor = $$props.cursor;
    		if ('raw' in $$props) $$invalidate(0, raw = $$props.raw);
    		if ('data' in $$props) $$invalidate(1, data = $$props.data);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*data*/ 2) {
    			$$invalidate(0, raw = getRaw(data));
    		}
    	};

    	return [raw, data];
    }

    class Raw extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, { data: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Raw",
    			options,
    			id: create_fragment$5.name
    		});
    	}

    	get data() {
    		throw new Error("<Raw>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set data(value) {
    		throw new Error("<Raw>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules/svelte-awesome/package/components/svg/Svg.svelte generated by Svelte v3.59.2 */

    const file$3 = "node_modules/svelte-awesome/package/components/svg/Svg.svelte";

    function create_fragment$4(ctx) {
    	let svg;
    	let svg_class_value;
    	let svg_role_value;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[12].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[11], null);

    	let svg_levels = [
    		{ version: "1.1" },
    		{
    			class: svg_class_value = "fa-icon " + /*className*/ ctx[0]
    		},
    		{ width: /*width*/ ctx[1] },
    		{ height: /*height*/ ctx[2] },
    		{ "aria-label": /*label*/ ctx[9] },
    		{
    			role: svg_role_value = /*label*/ ctx[9] ? 'img' : 'presentation'
    		},
    		{ viewBox: /*box*/ ctx[3] },
    		{ style: /*style*/ ctx[8] },
    		/*$$restProps*/ ctx[10]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			if (default_slot) default_slot.c();
    			set_svg_attributes(svg, svg_data);
    			toggle_class(svg, "fa-spin", /*spin*/ ctx[4]);
    			toggle_class(svg, "fa-pulse", /*pulse*/ ctx[6]);
    			toggle_class(svg, "fa-inverse", /*inverse*/ ctx[5]);
    			toggle_class(svg, "fa-flip-horizontal", /*flip*/ ctx[7] === 'horizontal');
    			toggle_class(svg, "fa-flip-vertical", /*flip*/ ctx[7] === 'vertical');
    			toggle_class(svg, "svelte-1mc5hvj", true);
    			add_location(svg, file$3, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);

    			if (default_slot) {
    				default_slot.m(svg, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 2048)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[11],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[11])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[11], dirty, null),
    						null
    					);
    				}
    			}

    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ version: "1.1" },
    				(!current || dirty & /*className*/ 1 && svg_class_value !== (svg_class_value = "fa-icon " + /*className*/ ctx[0])) && { class: svg_class_value },
    				(!current || dirty & /*width*/ 2) && { width: /*width*/ ctx[1] },
    				(!current || dirty & /*height*/ 4) && { height: /*height*/ ctx[2] },
    				(!current || dirty & /*label*/ 512) && { "aria-label": /*label*/ ctx[9] },
    				(!current || dirty & /*label*/ 512 && svg_role_value !== (svg_role_value = /*label*/ ctx[9] ? 'img' : 'presentation')) && { role: svg_role_value },
    				(!current || dirty & /*box*/ 8) && { viewBox: /*box*/ ctx[3] },
    				(!current || dirty & /*style*/ 256) && { style: /*style*/ ctx[8] },
    				dirty & /*$$restProps*/ 1024 && /*$$restProps*/ ctx[10]
    			]));

    			toggle_class(svg, "fa-spin", /*spin*/ ctx[4]);
    			toggle_class(svg, "fa-pulse", /*pulse*/ ctx[6]);
    			toggle_class(svg, "fa-inverse", /*inverse*/ ctx[5]);
    			toggle_class(svg, "fa-flip-horizontal", /*flip*/ ctx[7] === 'horizontal');
    			toggle_class(svg, "fa-flip-vertical", /*flip*/ ctx[7] === 'vertical');
    			toggle_class(svg, "svelte-1mc5hvj", true);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	const omit_props_names = ["class","width","height","box","spin","inverse","pulse","flip","style","label"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Svg', slots, ['default']);
    	let { class: className = '' } = $$props;
    	let { width } = $$props;
    	let { height } = $$props;
    	let { box = '0 0 0 0' } = $$props;
    	let { spin = false } = $$props;
    	let { inverse = false } = $$props;
    	let { pulse = false } = $$props;
    	let { flip = 'none' } = $$props;
    	let { style = '' } = $$props;
    	let { label = '' } = $$props;

    	$$self.$$.on_mount.push(function () {
    		if (width === undefined && !('width' in $$props || $$self.$$.bound[$$self.$$.props['width']])) {
    			console.warn("<Svg> was created without expected prop 'width'");
    		}

    		if (height === undefined && !('height' in $$props || $$self.$$.bound[$$self.$$.props['height']])) {
    			console.warn("<Svg> was created without expected prop 'height'");
    		}
    	});

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('class' in $$new_props) $$invalidate(0, className = $$new_props.class);
    		if ('width' in $$new_props) $$invalidate(1, width = $$new_props.width);
    		if ('height' in $$new_props) $$invalidate(2, height = $$new_props.height);
    		if ('box' in $$new_props) $$invalidate(3, box = $$new_props.box);
    		if ('spin' in $$new_props) $$invalidate(4, spin = $$new_props.spin);
    		if ('inverse' in $$new_props) $$invalidate(5, inverse = $$new_props.inverse);
    		if ('pulse' in $$new_props) $$invalidate(6, pulse = $$new_props.pulse);
    		if ('flip' in $$new_props) $$invalidate(7, flip = $$new_props.flip);
    		if ('style' in $$new_props) $$invalidate(8, style = $$new_props.style);
    		if ('label' in $$new_props) $$invalidate(9, label = $$new_props.label);
    		if ('$$scope' in $$new_props) $$invalidate(11, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		className,
    		width,
    		height,
    		box,
    		spin,
    		inverse,
    		pulse,
    		flip,
    		style,
    		label
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('className' in $$props) $$invalidate(0, className = $$new_props.className);
    		if ('width' in $$props) $$invalidate(1, width = $$new_props.width);
    		if ('height' in $$props) $$invalidate(2, height = $$new_props.height);
    		if ('box' in $$props) $$invalidate(3, box = $$new_props.box);
    		if ('spin' in $$props) $$invalidate(4, spin = $$new_props.spin);
    		if ('inverse' in $$props) $$invalidate(5, inverse = $$new_props.inverse);
    		if ('pulse' in $$props) $$invalidate(6, pulse = $$new_props.pulse);
    		if ('flip' in $$props) $$invalidate(7, flip = $$new_props.flip);
    		if ('style' in $$props) $$invalidate(8, style = $$new_props.style);
    		if ('label' in $$props) $$invalidate(9, label = $$new_props.label);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		className,
    		width,
    		height,
    		box,
    		spin,
    		inverse,
    		pulse,
    		flip,
    		style,
    		label,
    		$$restProps,
    		$$scope,
    		slots
    	];
    }

    class Svg extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$4, create_fragment$4, safe_not_equal, {
    			class: 0,
    			width: 1,
    			height: 2,
    			box: 3,
    			spin: 4,
    			inverse: 5,
    			pulse: 6,
    			flip: 7,
    			style: 8,
    			label: 9
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Svg",
    			options,
    			id: create_fragment$4.name
    		});
    	}

    	get class() {
    		throw new Error("<Svg>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set class(value) {
    		throw new Error("<Svg>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get width() {
    		throw new Error("<Svg>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set width(value) {
    		throw new Error("<Svg>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get height() {
    		throw new Error("<Svg>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set height(value) {
    		throw new Error("<Svg>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get box() {
    		throw new Error("<Svg>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set box(value) {
    		throw new Error("<Svg>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get spin() {
    		throw new Error("<Svg>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set spin(value) {
    		throw new Error("<Svg>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get inverse() {
    		throw new Error("<Svg>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set inverse(value) {
    		throw new Error("<Svg>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get pulse() {
    		throw new Error("<Svg>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set pulse(value) {
    		throw new Error("<Svg>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get flip() {
    		throw new Error("<Svg>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set flip(value) {
    		throw new Error("<Svg>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<Svg>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<Svg>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get label() {
    		throw new Error("<Svg>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set label(value) {
    		throw new Error("<Svg>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* node_modules/svelte-awesome/package/components/Icon.svelte generated by Svelte v3.59.2 */

    const { console: console_1$1 } = globals;
    const file$2 = "node_modules/svelte-awesome/package/components/Icon.svelte";

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[27] = list[i];
    	return child_ctx;
    }

    function get_each_context_1$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[30] = list[i];
    	return child_ctx;
    }

    // (15:4) {#each iconData?.paths || [] as path}
    function create_each_block_1$1(ctx) {
    	let path;
    	let path_levels = [/*path*/ ctx[30]];
    	let path_data = {};

    	for (let i = 0; i < path_levels.length; i += 1) {
    		path_data = assign(path_data, path_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			path = svg_element("path");
    			set_svg_attributes(path, path_data);
    			add_location(path, file$2, 15, 6, 206);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, path, anchor);
    		},
    		p: function update(ctx, dirty) {
    			set_svg_attributes(path, path_data = get_spread_update(path_levels, [dirty[0] & /*iconData*/ 64 && /*path*/ ctx[30]]));
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(path);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1$1.name,
    		type: "each",
    		source: "(15:4) {#each iconData?.paths || [] as path}",
    		ctx
    	});

    	return block;
    }

    // (18:4) {#each iconData?.polygons || [] as polygon}
    function create_each_block$1(ctx) {
    	let polygon;
    	let polygon_levels = [/*polygon*/ ctx[27]];
    	let polygon_data = {};

    	for (let i = 0; i < polygon_levels.length; i += 1) {
    		polygon_data = assign(polygon_data, polygon_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			polygon = svg_element("polygon");
    			set_svg_attributes(polygon, polygon_data);
    			add_location(polygon, file$2, 18, 6, 291);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, polygon, anchor);
    		},
    		p: function update(ctx, dirty) {
    			set_svg_attributes(polygon, polygon_data = get_spread_update(polygon_levels, [dirty[0] & /*iconData*/ 64 && /*polygon*/ ctx[27]]));
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(polygon);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$1.name,
    		type: "each",
    		source: "(18:4) {#each iconData?.polygons || [] as polygon}",
    		ctx
    	});

    	return block;
    }

    // (21:4) {#if iconData?.raw}
    function create_if_block$2(ctx) {
    	let raw;
    	let updating_data;
    	let current;

    	function raw_data_binding(value) {
    		/*raw_data_binding*/ ctx[16](value);
    	}

    	let raw_props = {};

    	if (/*iconData*/ ctx[6] !== void 0) {
    		raw_props.data = /*iconData*/ ctx[6];
    	}

    	raw = new Raw({ props: raw_props, $$inline: true });
    	binding_callbacks.push(() => bind(raw, 'data', raw_data_binding));

    	const block = {
    		c: function create() {
    			create_component(raw.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(raw, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const raw_changes = {};

    			if (!updating_data && dirty[0] & /*iconData*/ 64) {
    				updating_data = true;
    				raw_changes.data = /*iconData*/ ctx[6];
    				add_flush_callback(() => updating_data = false);
    			}

    			raw.$set(raw_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(raw.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(raw.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(raw, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$2.name,
    		type: "if",
    		source: "(21:4) {#if iconData?.raw}",
    		ctx
    	});

    	return block;
    }

    // (14:8)      
    function fallback_block(ctx) {
    	let t0;
    	let t1;
    	let if_block_anchor;
    	let current;
    	let each_value_1 = /*iconData*/ ctx[6]?.paths || [];
    	validate_each_argument(each_value_1);
    	let each_blocks_1 = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks_1[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
    	}

    	let each_value = /*iconData*/ ctx[6]?.polygons || [];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    	}

    	let if_block = /*iconData*/ ctx[6]?.raw && create_if_block$2(ctx);

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].c();
    			}

    			t0 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t1 = space();
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				if (each_blocks_1[i]) {
    					each_blocks_1[i].m(target, anchor);
    				}
    			}

    			insert_dev(target, t0, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				if (each_blocks[i]) {
    					each_blocks[i].m(target, anchor);
    				}
    			}

    			insert_dev(target, t1, anchor);
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*iconData*/ 64) {
    				each_value_1 = /*iconData*/ ctx[6]?.paths || [];
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1$1(ctx, each_value_1, i);

    					if (each_blocks_1[i]) {
    						each_blocks_1[i].p(child_ctx, dirty);
    					} else {
    						each_blocks_1[i] = create_each_block_1$1(child_ctx);
    						each_blocks_1[i].c();
    						each_blocks_1[i].m(t0.parentNode, t0);
    					}
    				}

    				for (; i < each_blocks_1.length; i += 1) {
    					each_blocks_1[i].d(1);
    				}

    				each_blocks_1.length = each_value_1.length;
    			}

    			if (dirty[0] & /*iconData*/ 64) {
    				each_value = /*iconData*/ ctx[6]?.polygons || [];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$1(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block$1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(t1.parentNode, t1);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}

    			if (/*iconData*/ ctx[6]?.raw) {
    				if (if_block) {
    					if_block.p(ctx, dirty);

    					if (dirty[0] & /*iconData*/ 64) {
    						transition_in(if_block, 1);
    					}
    				} else {
    					if_block = create_if_block$2(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks_1, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(t1);
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: fallback_block.name,
    		type: "fallback",
    		source: "(14:8)      ",
    		ctx
    	});

    	return block;
    }

    // (1:0) <Svg   {label}   {width}   {height}   {box}   style={combinedStyle}   {spin}   {flip}   {inverse}   {pulse}   class={className}   {...$$restProps} >
    function create_default_slot(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[15].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[17], null);
    	const default_slot_or_fallback = default_slot || fallback_block(ctx);

    	const block = {
    		c: function create() {
    			if (default_slot_or_fallback) default_slot_or_fallback.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot_or_fallback) {
    				default_slot_or_fallback.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty[0] & /*$$scope*/ 131072)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[17],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[17])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[17], dirty, null),
    						null
    					);
    				}
    			} else {
    				if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty[0] & /*iconData*/ 64)) {
    					default_slot_or_fallback.p(ctx, !current ? [-1, -1] : dirty);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot_or_fallback, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot_or_fallback, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot.name,
    		type: "slot",
    		source: "(1:0) <Svg   {label}   {width}   {height}   {box}   style={combinedStyle}   {spin}   {flip}   {inverse}   {pulse}   class={className}   {...$$restProps} >",
    		ctx
    	});

    	return block;
    }

    function create_fragment$3(ctx) {
    	let svg;
    	let current;

    	const svg_spread_levels = [
    		{ label: /*label*/ ctx[5] },
    		{ width: /*width*/ ctx[7] },
    		{ height: /*height*/ ctx[8] },
    		{ box: /*box*/ ctx[10] },
    		{ style: /*combinedStyle*/ ctx[9] },
    		{ spin: /*spin*/ ctx[1] },
    		{ flip: /*flip*/ ctx[4] },
    		{ inverse: /*inverse*/ ctx[2] },
    		{ pulse: /*pulse*/ ctx[3] },
    		{ class: /*className*/ ctx[0] },
    		/*$$restProps*/ ctx[11]
    	];

    	let svg_props = {
    		$$slots: { default: [create_default_slot] },
    		$$scope: { ctx }
    	};

    	for (let i = 0; i < svg_spread_levels.length; i += 1) {
    		svg_props = assign(svg_props, svg_spread_levels[i]);
    	}

    	svg = new Svg({ props: svg_props, $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(svg.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(svg, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const svg_changes = (dirty[0] & /*label, width, height, box, combinedStyle, spin, flip, inverse, pulse, className, $$restProps*/ 4031)
    			? get_spread_update(svg_spread_levels, [
    					dirty[0] & /*label*/ 32 && { label: /*label*/ ctx[5] },
    					dirty[0] & /*width*/ 128 && { width: /*width*/ ctx[7] },
    					dirty[0] & /*height*/ 256 && { height: /*height*/ ctx[8] },
    					dirty[0] & /*box*/ 1024 && { box: /*box*/ ctx[10] },
    					dirty[0] & /*combinedStyle*/ 512 && { style: /*combinedStyle*/ ctx[9] },
    					dirty[0] & /*spin*/ 2 && { spin: /*spin*/ ctx[1] },
    					dirty[0] & /*flip*/ 16 && { flip: /*flip*/ ctx[4] },
    					dirty[0] & /*inverse*/ 4 && { inverse: /*inverse*/ ctx[2] },
    					dirty[0] & /*pulse*/ 8 && { pulse: /*pulse*/ ctx[3] },
    					dirty[0] & /*className*/ 1 && { class: /*className*/ ctx[0] },
    					dirty[0] & /*$$restProps*/ 2048 && get_spread_object(/*$$restProps*/ ctx[11])
    				])
    			: {};

    			if (dirty[0] & /*$$scope, iconData*/ 131136) {
    				svg_changes.$$scope = { dirty, ctx };
    			}

    			svg.$set(svg_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(svg.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(svg.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(svg, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function normaliseData(data) {
    	let name;
    	let iconData;

    	if (!data) {
    		return undefined;
    	} else if ('definition' in data) {
    		console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead");
    		return undefined;
    	} else if ('iconName' in data && 'icon' in data) {
    		name = data.iconName;

    		// fontawesome v5/6 icon imported with:
    		// import { iconName } from '@fortawesome/packagename/iconName';
    		// import { iconName } from '@fortawesome/packagename';
    		const [width, height, ,,path] = data.icon;

    		const paths = Array.isArray(path) ? path : [path];

    		iconData = {
    			width,
    			height,
    			paths: paths.map(path => {
    				return { d: path };
    			})
    		};
    	} else {
    		// inbuilt icons
    		name = Object.keys(data)[0];

    		iconData = data[name];
    	}

    	return iconData;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	const omit_props_names = ["class","data","scale","spin","inverse","pulse","flip","label","style"];
    	let $$restProps = compute_rest_props($$props, omit_props_names);
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Icon', slots, ['default']);
    	let { class: className = '' } = $$props;
    	let { data } = $$props;
    	let iconData;
    	let { scale = 1 } = $$props;
    	let { spin = false } = $$props;
    	let { inverse = false } = $$props;
    	let { pulse = false } = $$props;
    	let { flip = undefined } = $$props;
    	let { label = '' } = $$props;
    	let { style = '' } = $$props;

    	// internal
    	let childrenHeight = 0;

    	let childrenWidth = 0;
    	let outerScale = 1;
    	let width = 10;
    	let height = 10;
    	let combinedStyle;
    	let box;

    	function normalisedScale() {
    		let numScale = 1;

    		if (typeof scale !== 'undefined') {
    			numScale = Number(scale);
    		}

    		if (isNaN(numScale) || numScale <= 0) {
    			console.warn('Invalid prop: prop "scale" should be a number over 0.');
    			return outerScale;
    		}

    		return numScale * outerScale;
    	}

    	function calculateBox() {
    		if (iconData) {
    			return `0 0 ${iconData.width} ${iconData.height}`;
    		}

    		return `0 0 ${width} ${height}`;
    	}

    	function calculateRatio() {
    		if (!iconData) {
    			return 1;
    		}

    		return Math.max(iconData.width, iconData.height) / 16;
    	}

    	function calculateWidth() {
    		if (childrenWidth) {
    			return childrenWidth;
    		}

    		if (iconData) {
    			return iconData.width / calculateRatio() * normalisedScale();
    		}

    		return 0;
    	}

    	function calculateHeight() {
    		if (childrenHeight) {
    			return childrenHeight;
    		}

    		if (iconData) {
    			return iconData.height / calculateRatio() * normalisedScale();
    		}

    		return 0;
    	}

    	function calculateStyle() {
    		let combined = '';

    		if (style !== null) {
    			combined += style;
    		}

    		let size = normalisedScale();

    		if (size === 1) {
    			if (combined.length === 0) {
    				return '';
    			}

    			return combined;
    		}

    		if (combined !== '' && !combined.endsWith(';')) {
    			combined += '; ';
    		}

    		return `${combined}font-size: ${size}em`;
    	}

    	$$self.$$.on_mount.push(function () {
    		if (data === undefined && !('data' in $$props || $$self.$$.bound[$$self.$$.props['data']])) {
    			console_1$1.warn("<Icon> was created without expected prop 'data'");
    		}
    	});

    	function raw_data_binding(value) {
    		iconData = value;
    		((($$invalidate(6, iconData), $$invalidate(12, data)), $$invalidate(14, style)), $$invalidate(13, scale));
    	}

    	$$self.$$set = $$new_props => {
    		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    		$$invalidate(11, $$restProps = compute_rest_props($$props, omit_props_names));
    		if ('class' in $$new_props) $$invalidate(0, className = $$new_props.class);
    		if ('data' in $$new_props) $$invalidate(12, data = $$new_props.data);
    		if ('scale' in $$new_props) $$invalidate(13, scale = $$new_props.scale);
    		if ('spin' in $$new_props) $$invalidate(1, spin = $$new_props.spin);
    		if ('inverse' in $$new_props) $$invalidate(2, inverse = $$new_props.inverse);
    		if ('pulse' in $$new_props) $$invalidate(3, pulse = $$new_props.pulse);
    		if ('flip' in $$new_props) $$invalidate(4, flip = $$new_props.flip);
    		if ('label' in $$new_props) $$invalidate(5, label = $$new_props.label);
    		if ('style' in $$new_props) $$invalidate(14, style = $$new_props.style);
    		if ('$$scope' in $$new_props) $$invalidate(17, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		Raw,
    		Svg,
    		className,
    		data,
    		iconData,
    		scale,
    		spin,
    		inverse,
    		pulse,
    		flip,
    		label,
    		style,
    		childrenHeight,
    		childrenWidth,
    		outerScale,
    		width,
    		height,
    		combinedStyle,
    		box,
    		normaliseData,
    		normalisedScale,
    		calculateBox,
    		calculateRatio,
    		calculateWidth,
    		calculateHeight,
    		calculateStyle
    	});

    	$$self.$inject_state = $$new_props => {
    		if ('className' in $$props) $$invalidate(0, className = $$new_props.className);
    		if ('data' in $$props) $$invalidate(12, data = $$new_props.data);
    		if ('iconData' in $$props) $$invalidate(6, iconData = $$new_props.iconData);
    		if ('scale' in $$props) $$invalidate(13, scale = $$new_props.scale);
    		if ('spin' in $$props) $$invalidate(1, spin = $$new_props.spin);
    		if ('inverse' in $$props) $$invalidate(2, inverse = $$new_props.inverse);
    		if ('pulse' in $$props) $$invalidate(3, pulse = $$new_props.pulse);
    		if ('flip' in $$props) $$invalidate(4, flip = $$new_props.flip);
    		if ('label' in $$props) $$invalidate(5, label = $$new_props.label);
    		if ('style' in $$props) $$invalidate(14, style = $$new_props.style);
    		if ('childrenHeight' in $$props) childrenHeight = $$new_props.childrenHeight;
    		if ('childrenWidth' in $$props) childrenWidth = $$new_props.childrenWidth;
    		if ('outerScale' in $$props) outerScale = $$new_props.outerScale;
    		if ('width' in $$props) $$invalidate(7, width = $$new_props.width);
    		if ('height' in $$props) $$invalidate(8, height = $$new_props.height);
    		if ('combinedStyle' in $$props) $$invalidate(9, combinedStyle = $$new_props.combinedStyle);
    		if ('box' in $$props) $$invalidate(10, box = $$new_props.box);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty[0] & /*data, style, scale*/ 28672) {
    			{
    				$$invalidate(6, iconData = normaliseData(data));
    				$$invalidate(7, width = calculateWidth());
    				$$invalidate(8, height = calculateHeight());
    				$$invalidate(9, combinedStyle = calculateStyle());
    				$$invalidate(10, box = calculateBox());
    			}
    		}
    	};

    	return [
    		className,
    		spin,
    		inverse,
    		pulse,
    		flip,
    		label,
    		iconData,
    		width,
    		height,
    		combinedStyle,
    		box,
    		$$restProps,
    		data,
    		scale,
    		style,
    		slots,
    		raw_data_binding,
    		$$scope
    	];
    }

    class Icon extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(
    			this,
    			options,
    			instance$3,
    			create_fragment$3,
    			safe_not_equal,
    			{
    				class: 0,
    				data: 12,
    				scale: 13,
    				spin: 1,
    				inverse: 2,
    				pulse: 3,
    				flip: 4,
    				label: 5,
    				style: 14
    			},
    			null,
    			[-1, -1]
    		);

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Icon",
    			options,
    			id: create_fragment$3.name
    		});
    	}

    	get class() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set class(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get data() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set data(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get scale() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set scale(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get spin() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set spin(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get inverse() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set inverse(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get pulse() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set pulse(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get flip() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set flip(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get label() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set label(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/screens/Home.svelte generated by Svelte v3.59.2 */
    const file$1 = "src/screens/Home.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[11] = list[i];
    	return child_ctx;
    }

    function get_each_context_2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[15] = list[i];
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[15] = list[i];
    	return child_ctx;
    }

    // (1:0) <script>  // 아이콘  import search from 'svelte-awesome/icons/search';  import film from 'svelte-awesome/icons/film';  import Icon from 'svelte-awesome/components/Icon.svelte';   export let onSubmit; // App.svelte에서 정의한 onSubmit 함수   // 이미지 외부 링크  const img_url = "https://image.tmdb.org/t/p/w185";    // 인기 영화 api 호출  async function getPopularMovies() {   const url = "http://localhost:8000/api/popular_movies";   return await fetch(url).then((res) => res.json());  }
    function create_catch_block_1(ctx) {
    	const block = { c: noop, m: noop, p: noop, d: noop };

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_catch_block_1.name,
    		type: "catch",
    		source: "(1:0) <script>  // 아이콘  import search from 'svelte-awesome/icons/search';  import film from 'svelte-awesome/icons/film';  import Icon from 'svelte-awesome/components/Icon.svelte';   export let onSubmit; // App.svelte에서 정의한 onSubmit 함수   // 이미지 외부 링크  const img_url = \\\"https://image.tmdb.org/t/p/w185\\\";    // 인기 영화 api 호출  async function getPopularMovies() {   const url = \\\"http://localhost:8000/api/popular_movies\\\";   return await fetch(url).then((res) => res.json());  }",
    		ctx
    	});

    	return block;
    }

    // (60:2) {:then results}
    function create_then_block_1(ctx) {
    	let if_block_anchor;
    	let if_block = /*results*/ ctx[18] && create_if_block$1(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (/*results*/ ctx[18]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block$1(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_then_block_1.name,
    		type: "then",
    		source: "(60:2) {:then results}",
    		ctx
    	});

    	return block;
    }

    // (61:3) {#if results}
    function create_if_block$1(ctx) {
    	let each_1_anchor;
    	let each_value_2 = /*results*/ ctx[18];
    	validate_each_argument(each_value_2);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
    	}

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				if (each_blocks[i]) {
    					each_blocks[i].m(target, anchor);
    				}
    			}

    			insert_dev(target, each_1_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*onSubmit, searchRequest, img_url*/ 9) {
    				each_value_2 = /*results*/ ctx[18];
    				validate_each_argument(each_value_2);
    				let i;

    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2(ctx, each_value_2, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_2(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_2.length;
    			}
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$1.name,
    		type: "if",
    		source: "(61:3) {#if results}",
    		ctx
    	});

    	return block;
    }

    // (62:4) {#each results as result}
    function create_each_block_2(ctx) {
    	let article;
    	let img;
    	let img_src_value;
    	let img_alt_value;
    	let t0;
    	let p;
    	let t1_value = /*result*/ ctx[15].title + "";
    	let t1;
    	let t2;
    	let mounted;
    	let dispose;

    	function click_handler() {
    		return /*click_handler*/ ctx[6](/*result*/ ctx[15]);
    	}

    	const block = {
    		c: function create() {
    			article = element("article");
    			img = element("img");
    			t0 = space();
    			p = element("p");
    			t1 = text(t1_value);
    			t2 = space();
    			attr_dev(img, "class", "home__search__result_container__img");
    			if (!src_url_equal(img.src, img_src_value = img_url$1 + /*result*/ ctx[15].poster_path)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", img_alt_value = /*result*/ ctx[15].title);
    			attr_dev(img, "width", "94");
    			attr_dev(img, "height", "150");
    			add_location(img, file$1, 63, 6, 2107);
    			attr_dev(p, "class", "home__search__result_container__title");
    			add_location(p, file$1, 64, 6, 2245);
    			attr_dev(article, "class", "home__search__result_container svelte-txw6ux");
    			add_location(article, file$1, 62, 5, 2016);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, article, anchor);
    			append_dev(article, img);
    			append_dev(article, t0);
    			append_dev(article, p);
    			append_dev(p, t1);
    			append_dev(article, t2);

    			if (!mounted) {
    				dispose = listen_dev(article, "click", click_handler, false, false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;

    			if (dirty & /*searchRequest*/ 8 && !src_url_equal(img.src, img_src_value = img_url$1 + /*result*/ ctx[15].poster_path)) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty & /*searchRequest*/ 8 && img_alt_value !== (img_alt_value = /*result*/ ctx[15].title)) {
    				attr_dev(img, "alt", img_alt_value);
    			}

    			if (dirty & /*searchRequest*/ 8 && t1_value !== (t1_value = /*result*/ ctx[15].title + "")) set_data_dev(t1, t1_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(article);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_2.name,
    		type: "each",
    		source: "(62:4) {#each results as result}",
    		ctx
    	});

    	return block;
    }

    // (54:24)     {#each preResults as result}
    function create_pending_block_1(ctx) {
    	let each_1_anchor;
    	let each_value_1 = /*preResults*/ ctx[2];
    	validate_each_argument(each_value_1);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				if (each_blocks[i]) {
    					each_blocks[i].m(target, anchor);
    				}
    			}

    			insert_dev(target, each_1_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*preResults*/ 4) {
    				each_value_1 = /*preResults*/ ctx[2];
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_1.length;
    			}
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_pending_block_1.name,
    		type: "pending",
    		source: "(54:24)     {#each preResults as result}",
    		ctx
    	});

    	return block;
    }

    // (55:3) {#each preResults as result}
    function create_each_block_1(ctx) {
    	let article;
    	let p;
    	let t0_value = /*result*/ ctx[15].title + "";
    	let t0;
    	let t1;

    	const block = {
    		c: function create() {
    			article = element("article");
    			p = element("p");
    			t0 = text(t0_value);
    			t1 = space();
    			attr_dev(p, "class", "home__search__result_container__title");
    			add_location(p, file$1, 56, 5, 1852);
    			attr_dev(article, "class", "home__search__result_container svelte-txw6ux");
    			add_location(article, file$1, 55, 4, 1798);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, article, anchor);
    			append_dev(article, p);
    			append_dev(p, t0);
    			append_dev(article, t1);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*preResults*/ 4 && t0_value !== (t0_value = /*result*/ ctx[15].title + "")) set_data_dev(t0, t0_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(article);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(55:3) {#each preResults as result}",
    		ctx
    	});

    	return block;
    }

    // (84:2) {:catch error}
    function create_catch_block(ctx) {
    	let p;
    	let t_value = /*error*/ ctx[14] + "";
    	let t;

    	const block = {
    		c: function create() {
    			p = element("p");
    			t = text(t_value);
    			add_location(p, file$1, 84, 3, 2943);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    			append_dev(p, t);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_catch_block.name,
    		type: "catch",
    		source: "(84:2) {:catch error}",
    		ctx
    	});

    	return block;
    }

    // (77:2) {:then movies}
    function create_then_block(ctx) {
    	let each_1_anchor;
    	let each_value = /*movies*/ ctx[10];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				if (each_blocks[i]) {
    					each_blocks[i].m(target, anchor);
    				}
    			}

    			insert_dev(target, each_1_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*onSubmit, moviesRequest, img_url*/ 17) {
    				each_value = /*movies*/ ctx[10];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_then_block.name,
    		type: "then",
    		source: "(77:2) {:then movies}",
    		ctx
    	});

    	return block;
    }

    // (78:3) {#each movies as movie}
    function create_each_block(ctx) {
    	let article;
    	let img;
    	let img_src_value;
    	let t0;
    	let p;
    	let t1_value = /*movie*/ ctx[11].title + "";
    	let t1;
    	let t2;
    	let mounted;
    	let dispose;

    	function click_handler_1() {
    		return /*click_handler_1*/ ctx[8](/*movie*/ ctx[11]);
    	}

    	const block = {
    		c: function create() {
    			article = element("article");
    			img = element("img");
    			t0 = space();
    			p = element("p");
    			t1 = text(t1_value);
    			t2 = space();
    			attr_dev(img, "class", "home__popular_movie__container__movie__img svelte-txw6ux");
    			if (!src_url_equal(img.src, img_src_value = img_url$1 + /*movie*/ ctx[11].poster_path)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", /*movie*/ ctx[11].title);
    			attr_dev(img, "width", "185");
    			attr_dev(img, "height", "300");
    			add_location(img, file$1, 79, 5, 2680);
    			attr_dev(p, "class", "home__popular_movie__container__movie__title");
    			add_location(p, file$1, 80, 5, 2823);
    			attr_dev(article, "class", "home__popular_movie__container__movie svelte-txw6ux");
    			add_location(article, file$1, 78, 4, 2584);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, article, anchor);
    			append_dev(article, img);
    			append_dev(article, t0);
    			append_dev(article, p);
    			append_dev(p, t1);
    			append_dev(article, t2);

    			if (!mounted) {
    				dispose = listen_dev(article, "click", click_handler_1, false, false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(article);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(78:3) {#each movies as movie}",
    		ctx
    	});

    	return block;
    }

    // (75:24)     <p>Loading...</p>   {:then movies}
    function create_pending_block(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "Loading...";
    			add_location(p, file$1, 75, 3, 2518);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_pending_block.name,
    		type: "pending",
    		source: "(75:24)     <p>Loading...</p>   {:then movies}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$2(ctx) {
    	let main;
    	let nav;
    	let a0;
    	let t1;
    	let a1;
    	let t3;
    	let a2;
    	let t5;
    	let header;
    	let section0;
    	let h10;
    	let t7;
    	let h5;
    	let t9;
    	let form;
    	let section1;
    	let icon0;
    	let t10;
    	let input;
    	let t11;
    	let icon1;
    	let t12;
    	let section2;
    	let promise;
    	let t13;
    	let section4;
    	let h11;
    	let t15;
    	let section3;
    	let current;
    	let mounted;
    	let dispose;

    	icon0 = new Icon({
    			props: {
    				class: "home__search__bar__film",
    				data: film,
    				scale: "2",
    				color: "#1A1C23"
    			},
    			$$inline: true
    		});

    	icon1 = new Icon({
    			props: {
    				class: "home__search__bar__search",
    				data: search,
    				scale: "2",
    				color: "#1A1C23"
    			},
    			$$inline: true
    		});

    	let info = {
    		ctx,
    		current: null,
    		token: null,
    		hasCatch: false,
    		pending: create_pending_block_1,
    		then: create_then_block_1,
    		catch: create_catch_block_1,
    		value: 18
    	};

    	handle_promise(promise = /*searchRequest*/ ctx[3], info);

    	let info_1 = {
    		ctx,
    		current: null,
    		token: null,
    		hasCatch: true,
    		pending: create_pending_block,
    		then: create_then_block,
    		catch: create_catch_block,
    		value: 10,
    		error: 14
    	};

    	handle_promise(/*moviesRequest*/ ctx[4], info_1);

    	const block = {
    		c: function create() {
    			main = element("main");
    			nav = element("nav");
    			a0 = element("a");
    			a0.textContent = "Page";
    			t1 = space();
    			a1 = element("a");
    			a1.textContent = "Movie";
    			t3 = space();
    			a2 = element("a");
    			a2.textContent = "Page";
    			t5 = space();
    			header = element("header");
    			section0 = element("section");
    			h10 = element("h1");
    			h10.textContent = "🎬 Viewtiful 🎬";
    			t7 = space();
    			h5 = element("h5");
    			h5.textContent = "Find your best movie!";
    			t9 = space();
    			form = element("form");
    			section1 = element("section");
    			create_component(icon0.$$.fragment);
    			t10 = space();
    			input = element("input");
    			t11 = space();
    			create_component(icon1.$$.fragment);
    			t12 = space();
    			section2 = element("section");
    			info.block.c();
    			t13 = space();
    			section4 = element("section");
    			h11 = element("h1");
    			h11.textContent = "인기영화 Top 3";
    			t15 = space();
    			section3 = element("section");
    			info_1.block.c();
    			attr_dev(a0, "href", "#");
    			attr_dev(a0, "class", "home__navigator__page1 svelte-txw6ux");
    			add_location(a0, file$1, 36, 1, 1006);
    			attr_dev(a1, "href", "#");
    			attr_dev(a1, "class", "home__navigator__movie svelte-txw6ux");
    			add_location(a1, file$1, 37, 1, 1059);
    			attr_dev(a2, "href", "#");
    			attr_dev(a2, "class", "home__navigator__page2 svelte-txw6ux");
    			add_location(a2, file$1, 38, 1, 1113);
    			attr_dev(nav, "class", "home__navigator svelte-txw6ux");
    			add_location(nav, file$1, 35, 0, 975);
    			attr_dev(h10, "class", "svelte-txw6ux");
    			add_location(h10, file$1, 42, 2, 1243);
    			attr_dev(h5, "class", "svelte-txw6ux");
    			add_location(h5, file$1, 43, 2, 1270);
    			attr_dev(section0, "class", "home__header__title svelte-txw6ux");
    			add_location(section0, file$1, 41, 1, 1203);
    			attr_dev(header, "class", "home__header");
    			add_location(header, file$1, 40, 0, 1172);
    			attr_dev(input, "class", "home__search__bar__input svelte-txw6ux");
    			attr_dev(input, "type", "text");
    			add_location(input, file$1, 49, 2, 1529);
    			attr_dev(section1, "class", "home__search__bar svelte-txw6ux");
    			add_location(section1, file$1, 47, 1, 1411);
    			attr_dev(section2, "class", "home__search__result");
    			add_location(section2, file$1, 52, 1, 1698);
    			attr_dev(form, "class", "home__search svelte-txw6ux");
    			add_location(form, file$1, 46, 0, 1323);
    			attr_dev(h11, "class", "svelte-txw6ux");
    			add_location(h11, file$1, 72, 1, 2420);
    			attr_dev(section3, "class", "home__popular_movie__container svelte-txw6ux");
    			add_location(section3, file$1, 73, 1, 2441);
    			attr_dev(section4, "class", "home__popular_movie svelte-txw6ux");
    			add_location(section4, file$1, 71, 0, 2381);
    			attr_dev(main, "class", "home svelte-txw6ux");
    			add_location(main, file$1, 34, 0, 955);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, main, anchor);
    			append_dev(main, nav);
    			append_dev(nav, a0);
    			append_dev(nav, t1);
    			append_dev(nav, a1);
    			append_dev(nav, t3);
    			append_dev(nav, a2);
    			append_dev(main, t5);
    			append_dev(main, header);
    			append_dev(header, section0);
    			append_dev(section0, h10);
    			append_dev(section0, t7);
    			append_dev(section0, h5);
    			append_dev(main, t9);
    			append_dev(main, form);
    			append_dev(form, section1);
    			mount_component(icon0, section1, null);
    			append_dev(section1, t10);
    			append_dev(section1, input);
    			set_input_value(input, /*query*/ ctx[1]);
    			append_dev(section1, t11);
    			mount_component(icon1, section1, null);
    			append_dev(form, t12);
    			append_dev(form, section2);
    			info.block.m(section2, info.anchor = null);
    			info.mount = () => section2;
    			info.anchor = null;
    			append_dev(main, t13);
    			append_dev(main, section4);
    			append_dev(section4, h11);
    			append_dev(section4, t15);
    			append_dev(section4, section3);
    			info_1.block.m(section3, info_1.anchor = null);
    			info_1.mount = () => section3;
    			info_1.anchor = null;
    			current = true;

    			if (!mounted) {
    				dispose = [
    					listen_dev(input, "input", /*input_input_handler*/ ctx[5]),
    					listen_dev(form, "submit", prevent_default(/*submit_handler*/ ctx[7]), false, true, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(new_ctx, [dirty]) {
    			ctx = new_ctx;

    			if (dirty & /*query*/ 2 && input.value !== /*query*/ ctx[1]) {
    				set_input_value(input, /*query*/ ctx[1]);
    			}

    			info.ctx = ctx;

    			if (dirty & /*searchRequest*/ 8 && promise !== (promise = /*searchRequest*/ ctx[3]) && handle_promise(promise, info)) ; else {
    				update_await_block_branch(info, ctx, dirty);
    			}

    			update_await_block_branch(info_1, ctx, dirty);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(icon0.$$.fragment, local);
    			transition_in(icon1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(icon0.$$.fragment, local);
    			transition_out(icon1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(main);
    			destroy_component(icon0);
    			destroy_component(icon1);
    			info.block.d();
    			info.token = null;
    			info = null;
    			info_1.block.d();
    			info_1.token = null;
    			info_1 = null;
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const img_url$1 = "https://image.tmdb.org/t/p/w185";

    // 인기 영화 api 호출
    async function getPopularMovies() {
    	const url = "http://localhost:8000/api/popular_movies";
    	return await fetch(url).then(res => res.json());
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let searchRequest;
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Home', slots, []);
    	let { onSubmit } = $$props;
    	let moviesRequest = getPopularMovies();
    	let query = ''; // 검색어
    	let preResults = []; // blink 현상을 방지하기 위해, 전에 검색 결과를 따로 저장해놓음

    	// query에 따른 영화 검색 api 호출
    	async function searchMoviesWithQuery(query) {
    		const url = `http://localhost:8000/api/search?query=${query}`;
    		return await fetch(url).then(res => res.json()).then(data => $$invalidate(2, preResults = data));
    	}

    	$$self.$$.on_mount.push(function () {
    		if (onSubmit === undefined && !('onSubmit' in $$props || $$self.$$.bound[$$self.$$.props['onSubmit']])) {
    			console.warn("<Home> was created without expected prop 'onSubmit'");
    		}
    	});

    	const writable_props = ['onSubmit'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Home> was created with unknown prop '${key}'`);
    	});

    	function input_input_handler() {
    		query = this.value;
    		$$invalidate(1, query);
    	}

    	const click_handler = result => {
    		onSubmit(result);
    	};

    	const submit_handler = () => {
    		onSubmit(preResults[0]);
    	};

    	const click_handler_1 = movie => {
    		onSubmit(movie);
    	};

    	$$self.$$set = $$props => {
    		if ('onSubmit' in $$props) $$invalidate(0, onSubmit = $$props.onSubmit);
    	};

    	$$self.$capture_state = () => ({
    		search,
    		film,
    		Icon,
    		onSubmit,
    		img_url: img_url$1,
    		getPopularMovies,
    		moviesRequest,
    		query,
    		preResults,
    		searchMoviesWithQuery,
    		searchRequest
    	});

    	$$self.$inject_state = $$props => {
    		if ('onSubmit' in $$props) $$invalidate(0, onSubmit = $$props.onSubmit);
    		if ('moviesRequest' in $$props) $$invalidate(4, moviesRequest = $$props.moviesRequest);
    		if ('query' in $$props) $$invalidate(1, query = $$props.query);
    		if ('preResults' in $$props) $$invalidate(2, preResults = $$props.preResults);
    		if ('searchRequest' in $$props) $$invalidate(3, searchRequest = $$props.searchRequest);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*query*/ 2) {
    			// 변수인 query에 의해 값이 변경되므로 $ statement 사용
    			$$invalidate(3, searchRequest = searchMoviesWithQuery(query));
    		}
    	};

    	return [
    		onSubmit,
    		query,
    		preResults,
    		searchRequest,
    		moviesRequest,
    		input_input_handler,
    		click_handler,
    		submit_handler,
    		click_handler_1
    	];
    }

    class Home extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { onSubmit: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Home",
    			options,
    			id: create_fragment$2.name
    		});
    	}

    	get onSubmit() {
    		throw new Error("<Home>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set onSubmit(value) {
    		throw new Error("<Home>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/screens/Search.svelte generated by Svelte v3.59.2 */

    const { console: console_1 } = globals;
    const file = "src/screens/Search.svelte";

    // (64:2) {#if movieInfo}
    function create_if_block(ctx) {
    	let section;
    	let div2;
    	let div0;
    	let h2;
    	let t0_value = /*movieInfo*/ ctx[1].title + "";
    	let t0;
    	let t1;
    	let span0;
    	let t2;
    	let t3_value = /*movieInfo*/ ctx[1].vote_average + "";
    	let t3;
    	let t4;
    	let span1;
    	let t7;
    	let div1;
    	let span2;
    	let t8;
    	let t9_value = /*movieInfo*/ ctx[1].release_date + "";
    	let t9;
    	let t10;
    	let hr;
    	let t11;
    	let h3;
    	let t13;
    	let p;
    	let t14_value = /*movieInfo*/ ctx[1].overview + "";
    	let t14;
    	let t15;
    	let div3;
    	let img;
    	let img_src_value;
    	let img_alt_value;

    	const block = {
    		c: function create() {
    			section = element("section");
    			div2 = element("div");
    			div0 = element("div");
    			h2 = element("h2");
    			t0 = text(t0_value);
    			t1 = space();
    			span0 = element("span");
    			t2 = text("평점: ");
    			t3 = text(t3_value);
    			t4 = space();
    			span1 = element("span");
    			span1.textContent = `장르: ${['액션', '드라마'].join(', ')}`;
    			t7 = space();
    			div1 = element("div");
    			span2 = element("span");
    			t8 = text("개봉일: ");
    			t9 = text(t9_value);
    			t10 = space();
    			hr = element("hr");
    			t11 = space();
    			h3 = element("h3");
    			h3.textContent = "개요";
    			t13 = space();
    			p = element("p");
    			t14 = text(t14_value);
    			t15 = space();
    			div3 = element("div");
    			img = element("img");
    			attr_dev(h2, "class", "svelte-1tf3qa8");
    			add_location(h2, file, 68, 10, 1810);
    			attr_dev(span0, "class", "rating svelte-1tf3qa8");
    			add_location(span0, file, 69, 10, 1847);
    			attr_dev(span1, "class", "genre svelte-1tf3qa8");
    			add_location(span1, file, 70, 10, 1914);
    			attr_dev(div0, "class", "title_section svelte-1tf3qa8");
    			add_location(div0, file, 67, 8, 1772);
    			add_location(span2, file, 74, 10, 2053);
    			attr_dev(div1, "class", "release_date svelte-1tf3qa8");
    			add_location(div1, file, 73, 8, 2016);
    			attr_dev(hr, "class", "svelte-1tf3qa8");
    			add_location(hr, file, 76, 8, 2119);
    			attr_dev(h3, "class", "summary_heading svelte-1tf3qa8");
    			add_location(h3, file, 78, 8, 2155);
    			add_location(p, file, 79, 8, 2199);
    			attr_dev(div2, "class", "movie_details svelte-1tf3qa8");
    			add_location(div2, file, 65, 6, 1702);
    			if (!src_url_equal(img.src, img_src_value = `https://image.tmdb.org/t/p/w500/${/*movieInfo*/ ctx[1].poster_path}`)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", img_alt_value = /*movieInfo*/ ctx[1].original_title);
    			attr_dev(img, "class", "svelte-1tf3qa8");
    			add_location(img, file, 83, 8, 2303);
    			attr_dev(div3, "class", "movie_poster svelte-1tf3qa8");
    			add_location(div3, file, 82, 6, 2268);
    			attr_dev(section, "class", "movie_info svelte-1tf3qa8");
    			add_location(section, file, 64, 4, 1667);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, section, anchor);
    			append_dev(section, div2);
    			append_dev(div2, div0);
    			append_dev(div0, h2);
    			append_dev(h2, t0);
    			append_dev(div0, t1);
    			append_dev(div0, span0);
    			append_dev(span0, t2);
    			append_dev(span0, t3);
    			append_dev(div0, t4);
    			append_dev(div0, span1);
    			append_dev(div2, t7);
    			append_dev(div2, div1);
    			append_dev(div1, span2);
    			append_dev(span2, t8);
    			append_dev(span2, t9);
    			append_dev(div2, t10);
    			append_dev(div2, hr);
    			append_dev(div2, t11);
    			append_dev(div2, h3);
    			append_dev(div2, t13);
    			append_dev(div2, p);
    			append_dev(p, t14);
    			append_dev(section, t15);
    			append_dev(section, div3);
    			append_dev(div3, img);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*movieInfo*/ 2 && t0_value !== (t0_value = /*movieInfo*/ ctx[1].title + "")) set_data_dev(t0, t0_value);
    			if (dirty & /*movieInfo*/ 2 && t3_value !== (t3_value = /*movieInfo*/ ctx[1].vote_average + "")) set_data_dev(t3, t3_value);
    			if (dirty & /*movieInfo*/ 2 && t9_value !== (t9_value = /*movieInfo*/ ctx[1].release_date + "")) set_data_dev(t9, t9_value);
    			if (dirty & /*movieInfo*/ 2 && t14_value !== (t14_value = /*movieInfo*/ ctx[1].overview + "")) set_data_dev(t14, t14_value);

    			if (dirty & /*movieInfo*/ 2 && !src_url_equal(img.src, img_src_value = `https://image.tmdb.org/t/p/w500/${/*movieInfo*/ ctx[1].poster_path}`)) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty & /*movieInfo*/ 2 && img_alt_value !== (img_alt_value = /*movieInfo*/ ctx[1].original_title)) {
    				attr_dev(img, "alt", img_alt_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(section);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(64:2) {#if movieInfo}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1(ctx) {
    	let main;
    	let header;
    	let div;
    	let button0;
    	let t1;
    	let h1;
    	let t3;
    	let nav;
    	let a0;
    	let t5;
    	let a1;
    	let t7;
    	let a2;
    	let t9;
    	let form;
    	let input;
    	let t10;
    	let button1;
    	let img;
    	let img_src_value;
    	let t11;
    	let mounted;
    	let dispose;
    	let if_block = /*movieInfo*/ ctx[1] && create_if_block(ctx);

    	const block = {
    		c: function create() {
    			main = element("main");
    			header = element("header");
    			div = element("div");
    			button0 = element("button");
    			button0.textContent = "Home";
    			t1 = space();
    			h1 = element("h1");
    			h1.textContent = "🎬 Viewtiful 🎬";
    			t3 = space();
    			nav = element("nav");
    			a0 = element("a");
    			a0.textContent = "Page";
    			t5 = space();
    			a1 = element("a");
    			a1.textContent = "Movie";
    			t7 = space();
    			a2 = element("a");
    			a2.textContent = "Page";
    			t9 = space();
    			form = element("form");
    			input = element("input");
    			t10 = space();
    			button1 = element("button");
    			img = element("img");
    			t11 = space();
    			if (if_block) if_block.c();
    			add_location(button0, file, 44, 6, 1079);
    			attr_dev(h1, "class", "svelte-1tf3qa8");
    			add_location(h1, file, 45, 6, 1125);
    			attr_dev(div, "class", "home_title svelte-1tf3qa8");
    			add_location(div, file, 43, 4, 1048);
    			attr_dev(a0, "href", "#");
    			attr_dev(a0, "class", "svelte-1tf3qa8");
    			add_location(a0, file, 49, 6, 1217);
    			attr_dev(a1, "href", "#");
    			attr_dev(a1, "class", "svelte-1tf3qa8");
    			add_location(a1, file, 50, 6, 1244);
    			attr_dev(a2, "href", "#");
    			attr_dev(a2, "class", "svelte-1tf3qa8");
    			add_location(a2, file, 51, 6, 1272);
    			attr_dev(nav, "class", "nav_links svelte-1tf3qa8");
    			add_location(nav, file, 48, 4, 1187);
    			attr_dev(input, "placeholder", "영화 제목을 입력하세요");
    			attr_dev(input, "class", "svelte-1tf3qa8");
    			add_location(input, file, 55, 6, 1412);
    			if (!src_url_equal(img.src, img_src_value = img_url)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "검색 아이콘");
    			attr_dev(img, "class", "search-button-icon svelte-1tf3qa8");
    			add_location(img, file, 57, 8, 1503);
    			attr_dev(button1, "type", "submit");
    			attr_dev(button1, "class", "svelte-1tf3qa8");
    			add_location(button1, file, 56, 6, 1472);
    			attr_dev(form, "class", "search-bar svelte-1tf3qa8");
    			add_location(form, file, 54, 4, 1325);
    			attr_dev(header, "class", "home__header svelte-1tf3qa8");
    			add_location(header, file, 41, 2, 988);
    			attr_dev(main, "class", "search_result");
    			add_location(main, file, 39, 0, 940);
=======
    /* src\App.svelte generated by Svelte v3.59.2 */

    const file = "src\\App.svelte";

    function create_fragment(ctx) {
    	let main;
    	let h1;
    	let t1;
    	let p0;
    	let t3;
    	let p1;
    	let t4;
    	let t5_value = (/*number*/ ctx[0] || '') + "";
    	let t5;
    	let t6;
    	let input;
    	let t7;
    	let button;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			main = element("main");
    			h1 = element("h1");
    			h1.textContent = "Fast Blog";
    			t1 = space();
    			p0 = element("p");
    			p0.textContent = "We are building our blog using FastAPI and Svelte!";
    			t3 = space();
    			p1 = element("p");
    			t4 = text("response number: ");
    			t5 = text(t5_value);
    			t6 = space();
    			input = element("input");
    			t7 = space();
    			button = element("button");
    			button.textContent = "submit";
    			attr_dev(h1, "class", "svelte-1hs5o9");
    			add_location(h1, file, 19, 1, 371);
    			add_location(p0, file, 20, 1, 392);
    			add_location(p1, file, 21, 1, 452);
    			add_location(input, file, 22, 1, 493);
    			attr_dev(button, "type", "button");
    			add_location(button, file, 23, 1, 529);
    			add_location(main, file, 18, 0, 362);
>>>>>>> develop
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, main, anchor);
<<<<<<< HEAD
    			append_dev(main, header);
    			append_dev(header, div);
    			append_dev(div, button0);
    			append_dev(div, t1);
    			append_dev(div, h1);
    			append_dev(header, t3);
    			append_dev(header, nav);
    			append_dev(nav, a0);
    			append_dev(nav, t5);
    			append_dev(nav, a1);
    			append_dev(nav, t7);
    			append_dev(nav, a2);
    			append_dev(header, t9);
    			append_dev(header, form);
    			append_dev(form, input);
    			set_input_value(input, /*query*/ ctx[2]);
    			append_dev(form, t10);
    			append_dev(form, button1);
    			append_dev(button1, img);
    			append_dev(main, t11);
    			if (if_block) if_block.m(main, null);

    			if (!mounted) {
    				dispose = [
    					listen_dev(
    						button0,
    						"click",
    						function () {
    							if (is_function(/*onBack*/ ctx[0])) /*onBack*/ ctx[0].apply(this, arguments);
    						},
    						false,
    						false,
    						false,
    						false
    					),
    					listen_dev(input, "input", /*input_input_handler*/ ctx[5]),
    					listen_dev(form, "submit", prevent_default(/*submit_handler*/ ctx[6]), false, true, false, false)
=======
    			append_dev(main, h1);
    			append_dev(main, t1);
    			append_dev(main, p0);
    			append_dev(main, t3);
    			append_dev(main, p1);
    			append_dev(p1, t4);
    			append_dev(p1, t5);
    			append_dev(main, t6);
    			append_dev(main, input);
    			set_input_value(input, /*inputNumber*/ ctx[1]);
    			append_dev(main, t7);
    			append_dev(main, button);

    			if (!mounted) {
    				dispose = [
    					listen_dev(input, "input", /*input_input_handler*/ ctx[3]),
    					listen_dev(button, "click", /*click_handler*/ ctx[4], false, false, false, false)
>>>>>>> develop
    				];

    				mounted = true;
    			}
    		},
<<<<<<< HEAD
    		p: function update(new_ctx, [dirty]) {
    			ctx = new_ctx;

    			if (dirty & /*query*/ 4 && input.value !== /*query*/ ctx[2]) {
    				set_input_value(input, /*query*/ ctx[2]);
    			}

    			if (/*movieInfo*/ ctx[1]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block(ctx);
    					if_block.c();
    					if_block.m(main, null);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
=======
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*number*/ 1 && t5_value !== (t5_value = (/*number*/ ctx[0] || '') + "")) set_data_dev(t5, t5_value);

    			if (dirty & /*inputNumber*/ 2 && input.value !== /*inputNumber*/ ctx[1]) {
    				set_input_value(input, /*inputNumber*/ ctx[1]);
>>>>>>> develop
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(main);
<<<<<<< HEAD
    			if (if_block) if_block.d();
=======
>>>>>>> develop
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
<<<<<<< HEAD
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const img_url = "https://cdn-icons-png.freepik.com/512/2311/2311526.png";

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Search', slots, []);
    	let { onBack } = $$props;
    	let { pageState } = $$props;

    	// 영화 정보를 저장할 변수 선언
    	let movieInfo = null;

    	let query = '';

    	// 영화 정보를 API에서 가져오는 비동기 함수
    	async function fetchMovieInfo(title) {
    		try {
    			// 영화 제목을 쿼리로 사용하여 API 요청
    			const response = await fetch(`http://localhost:8000/api/search?query=${title}`);

    			const data = await response.json();

    			// 첫 번째 결과를 movieInfo 변수에 저장
    			$$invalidate(1, movieInfo = data[0]);
    		} catch(error) {
    			// 에러 발생 시 콘솔에 에러 메시지 출력
    			console.error('Error fetching movie info:', error);
    		}
    	}

    	// 컴포넌트가 마운트될 때 fetchMovieInfo 함수 호출
    	onMount(() => {
    		if (pageState) {
    			$$invalidate(1, movieInfo = pageState);
    			$$invalidate(2, query = pageState.title);
    		}
    	});

    	$$self.$$.on_mount.push(function () {
    		if (onBack === undefined && !('onBack' in $$props || $$self.$$.bound[$$self.$$.props['onBack']])) {
    			console_1.warn("<Search> was created without expected prop 'onBack'");
    		}

    		if (pageState === undefined && !('pageState' in $$props || $$self.$$.bound[$$self.$$.props['pageState']])) {
    			console_1.warn("<Search> was created without expected prop 'pageState'");
    		}
    	});

    	const writable_props = ['onBack', 'pageState'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<Search> was created with unknown prop '${key}'`);
    	});

    	function input_input_handler() {
    		query = this.value;
    		$$invalidate(2, query);
    	}

    	const submit_handler = () => fetchMovieInfo(query);

    	$$self.$$set = $$props => {
    		if ('onBack' in $$props) $$invalidate(0, onBack = $$props.onBack);
    		if ('pageState' in $$props) $$invalidate(4, pageState = $$props.pageState);
    	};

    	$$self.$capture_state = () => ({
    		onMount,
    		onBack,
    		pageState,
    		movieInfo,
    		query,
    		fetchMovieInfo,
    		img_url
    	});

    	$$self.$inject_state = $$props => {
    		if ('onBack' in $$props) $$invalidate(0, onBack = $$props.onBack);
    		if ('pageState' in $$props) $$invalidate(4, pageState = $$props.pageState);
    		if ('movieInfo' in $$props) $$invalidate(1, movieInfo = $$props.movieInfo);
    		if ('query' in $$props) $$invalidate(2, query = $$props.query);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		onBack,
    		movieInfo,
    		query,
    		fetchMovieInfo,
    		pageState,
    		input_input_handler,
    		submit_handler
    	];
    }

    class Search extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, { onBack: 0, pageState: 4 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Search",
    			options,
    			id: create_fragment$1.name
    		});
    	}

    	get onBack() {
    		throw new Error("<Search>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set onBack(value) {
    		throw new Error("<Search>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get pageState() {
    		throw new Error("<Search>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set pageState(value) {
    		throw new Error("<Search>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/App.svelte generated by Svelte v3.59.2 */

    function create_fragment(ctx) {
    	let switch_instance;
    	let switch_instance_anchor;
    	let current;
    	var switch_value = /*pages*/ ctx[2][/*page*/ ctx[0]];

    	function switch_props(ctx) {
    		return {
    			props: {
    				onSubmit: /*onSubmit*/ ctx[3],
    				onBack: /*onBack*/ ctx[4],
    				pageState: /*pageState*/ ctx[1]
    			},
    			$$inline: true
    		};
    	}

    	if (switch_value) {
    		switch_instance = construct_svelte_component_dev(switch_value, switch_props(ctx));
    	}

    	const block = {
    		c: function create() {
    			if (switch_instance) create_component(switch_instance.$$.fragment);
    			switch_instance_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (switch_instance) mount_component(switch_instance, target, anchor);
    			insert_dev(target, switch_instance_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const switch_instance_changes = {};
    			if (dirty & /*pageState*/ 2) switch_instance_changes.pageState = /*pageState*/ ctx[1];

    			if (dirty & /*page*/ 1 && switch_value !== (switch_value = /*pages*/ ctx[2][/*page*/ ctx[0]])) {
    				if (switch_instance) {
    					group_outros();
    					const old_component = switch_instance;

    					transition_out(old_component.$$.fragment, 1, 0, () => {
    						destroy_component(old_component, 1);
    					});

    					check_outros();
    				}

    				if (switch_value) {
    					switch_instance = construct_svelte_component_dev(switch_value, switch_props(ctx));
    					create_component(switch_instance.$$.fragment);
    					transition_in(switch_instance.$$.fragment, 1);
    					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
    				} else {
    					switch_instance = null;
    				}
    			} else if (switch_value) {
    				switch_instance.$set(switch_instance_changes);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(switch_instance_anchor);
    			if (switch_instance) destroy_component(switch_instance, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
=======
>>>>>>> develop
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
<<<<<<< HEAD
    	const pages = [Home, Search]; // 모든 레이아웃
    	let page = 0; // 현재 레이아웃 인덱스
    	let pageState = null; // 임시로 영화 정보 저장

    	// Home에서 검색을 했을때 Search로 넘어가게 함
    	function onSubmit(values) {
    		if (page === pages.length - 1) {
    			$$invalidate(1, pageState = values);
    		} else {
    			$$invalidate(1, pageState = values);
    			$$invalidate(0, page += 1);
    		}
    	}

    	// Search에서 Home으로 넘어가게 함
    	function onBack(values) {
    		$$invalidate(1, pageState = null);
    		$$invalidate(0, page -= 1);
    	}
=======
    	let number;
    	let inputNumber;

    	const request = async endpoint => {
    		const resp = await fetch(`http://localhost:8000/api${endpoint}`);
    		const result = await resp.json();
    		return result;
    	};

    	const getNumberFromBackend = async no => {
    		const result = await request(`/post/${no}`);
    		$$invalidate(0, number = result.data);
    	};
>>>>>>> develop

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

<<<<<<< HEAD
    	$$self.$capture_state = () => ({
    		Home,
    		Search,
    		pages,
    		page,
    		pageState,
    		onSubmit,
    		onBack
    	});

    	$$self.$inject_state = $$props => {
    		if ('page' in $$props) $$invalidate(0, page = $$props.page);
    		if ('pageState' in $$props) $$invalidate(1, pageState = $$props.pageState);
=======
    	function input_input_handler() {
    		inputNumber = this.value;
    		$$invalidate(1, inputNumber);
    	}

    	const click_handler = () => getNumberFromBackend(inputNumber);

    	$$self.$capture_state = () => ({
    		number,
    		inputNumber,
    		request,
    		getNumberFromBackend
    	});

    	$$self.$inject_state = $$props => {
    		if ('number' in $$props) $$invalidate(0, number = $$props.number);
    		if ('inputNumber' in $$props) $$invalidate(1, inputNumber = $$props.inputNumber);
>>>>>>> develop
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

<<<<<<< HEAD
    	return [page, pageState, pages, onSubmit, onBack];
=======
    	return [number, inputNumber, getNumberFromBackend, input_input_handler, click_handler];
>>>>>>> develop
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new App({
    	target: document.body,
    	props: {
    		name: 'world'
    	}
    });

    return app;

})();
//# sourceMappingURL=main.js.map
