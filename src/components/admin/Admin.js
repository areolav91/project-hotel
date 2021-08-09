
import AdminPage from "./LoggedIn";
import MessageList from "./ContactMessage";
import EnqList from "./EnquiryMessage";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Admin() {
	return (
	<>
	
	
	<Container className="messages-container">
	<Row className="messages-row">
	<Col>
	<div class="admin-page">
	<AdminPage />
	</div>
	</Col>
	<Col>
	<div class="messages">
	<MessageList />
	<EnqList />
	</div>
	</Col>
	</Row>
	</Container>
	</>
	);
}