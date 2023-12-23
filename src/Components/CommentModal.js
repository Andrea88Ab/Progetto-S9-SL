
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CommentModal({ show, onHide, movie }) {
  const [comment, setComment] = useState('');
  const [ranking, setRanking] = useState('');

  const handleSubmit = () => {
    console.log('Comment:', comment, 'Movie:', movie?.original_title || movie?.original_name);
    
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Comment on {movie?.original_title || movie?.original_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        value={comment} 
                        onChange={(e) => setComment(e.target.value)}
                    />
                </Form.Group>

                {/* Aggiunta del controllo Ranking */}
                <Form.Group className="mb-3">
                    <Form.Label>Ranking</Form.Label>
                    <Form.Control 
                        as="select" 
                        value={ranking} 
                        onChange={(e) => setRanking(e.target.value)}
                    >
                        <option value="">Seleziona rank</option>
                        <option value="1">1 - Insomma</option>
                        <option value="2">2 - Bello</option>
                        <option value="3">3 - Mi piace</option>
                        <option value="4">4 - Interessante</option>
                        <option value="5">5 - Ottimo</option>
                    </Form.Control>
                </Form.Group>
                {/* Fine del controllo Ranking */}

            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>Close</Button>
            <Button variant="primary" onClick={handleSubmit}>Submit Comment</Button>
        </Modal.Footer>
    </Modal>
);
}

export default CommentModal;
