import React from 'react';
import PropTypes from 'prop-types';

const Content = ({content,showContent}) => {
    let text = "";
    if(showContent){
        text = content
    }

    return (
        <div>
            {text}
        </div>
    );
};

Content.propTypes = {
    content:PropTypes.string,
    showContent:PropTypes.bool
};

export default Content;