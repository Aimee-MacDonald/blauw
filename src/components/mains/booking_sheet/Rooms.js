import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'

const Rooms = props => {
  const roomsEl = useRef(null)
  useEffect(() => roomsEl.current.scrollTop = props.scroll)
  
  return(
    <StyledRooms ref={roomsEl}>
      <p>Camping 1</p>
      <p>Camping 2</p>
      <p>Camping 3</p>
      <p>Camping 4</p>
      <p>Camping 5</p>
      <p>Camping 6</p>
      <p>Camping 7</p>
      <p>Camping 8</p>
      <p>Camping 9</p>
      <p>Camping 10</p>
      <p>Camping 11</p>
      <p>Camping 12</p>
      <p>Camping 13</p>
      <p>Camping 14</p>
      <p>Camping 15</p>
      <p>Camping 16</p>
      <p>Camping 17</p>
      <p>Camping 18</p>
      <p>Camping 19</p>
      <p>Camping 20</p>
      <p>Camping 21</p>
      <p>Camping 22</p>
      <p>Camping 23</p>
      <p>Camping 24</p>
      <p>Camping 25</p>
      <p>Camping 26</p>
      <p>Camping 27</p>
      <p>Camping 28</p>
      <p>Camping 29</p>
      <p>Camping 30</p>
      <p>Camping 31</p>
      <p>Camping 32</p>
      <p>Camping 33</p>
      <p>Camping 34</p>
      <p>Camping 35</p>
      <p>Camping 36</p>
      <p>Camping 37</p>
      <p>Camping 38</p>
      <p>Camping 39</p>
      <p>Camping 40</p>
      <p>Camping 41</p>
      <p>Camping 42</p>
      <p>Camping 43</p>
      <p>Camping 44</p>
      <p>Camping 45</p>
      <p>Camping 46</p>
      <p>Camping 47</p>
      <p>Camping 48</p>
      <p>Camping 49</p>
      <p>Camping 50</p>
      <p>Camping 51</p>
      <p>Camping 52</p>
      <p>Camping 53</p>
      <p>Camping 54</p>
      <p>Camping 55</p>
      <p>Camping 56</p>
      <p>Camping 57</p>
      <p>Camping 58</p>
      <p>Camping 59</p>
      <p>Camping 60</p>
      <p>Camping 61</p>
      <p>Camping 62</p>
      <p>Camping 63</p>
      <p>Camping 64</p>
      <p>Camping 65</p>
      <p>Camping 66</p>
      <p>Camping 67</p>
      <p>Camping 68</p>
      <p>Camping 69</p>
      <p>Camping 70</p>
      <p>Camping 71</p>
      <p>Camping 72</p>
      <p>Camping 73</p>
      <p>Camping 74</p>
      <p>Camping 75</p>
      <p>Camping 76</p>
      <p>Camping 77</p>
      <p>Camping 78</p>
      <p>Camping 79</p>
      <p>Camping 80</p>
    </StyledRooms>
  )
}

const StyledRooms = styled.div`
  background-color: lime;
  height: 100%;
  overflow-y: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows:repeat(80, 2rem);

  p{
    display: flex;
    align-items: center;
    padding-left: 0.4rem;
  }
`

export default Rooms