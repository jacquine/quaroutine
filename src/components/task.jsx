import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid green;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background: white;
`;

export default class Task extends React.Component {
    setRef = ref => {
        this.ref = ref;
        this.props.innerRef(ref);
    };
    
    render() { 
        
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided) => (
                    <div>
                    <Container 
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps} 
                        ref = {provided.innerRef}
                    >
                        {this.props.task.content}
                    </Container>
                    </div>
                )}
            </Draggable>
            
        );
    }
}
