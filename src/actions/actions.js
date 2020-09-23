export const submit_form = slide => ({ type: 'SUBMIT', payload: slide }),
    set_slide_prev = slide => ({ type: 'PREV_SLIDE', payload: slide }),
    set_slide_next = slide => ({ type: 'NEXT_SLIDE', payload: slide }),
    set_coords = answer => ({ type: 'SET_COORDS', payload: answer }),
    set_demo = answer => ({ type: 'SET_DEMO', payload: answer }),
    set_disabled = () => ({ type: 'DISABLE_BUTTON', payload: true }),
    set_enabled = () => ({ type: 'ENABLE_BUTTON', payload: false })