import React, {Fragment} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";

const Policy = () => {
    return (
        <Fragment>
            <Container className={'my-5 py-5'}>
                <Card>
                    <h4 className={'text-center py-3'}>Privacy Policy</h4>
                    <div className={'my-3 p-4'}>
                        <p>Not everyone knows how to make a Privacy Policy agreement, especially with CCPA or GDPR or CalOPPA or PIPEDA or Australia's Privacy Act provisions. If you are not a lawyer or someone who is familiar to Privacy Policies, you will be clueless. Some people might even take advantage of you because of this. Some people may even extort money from you. These are some examples that we want to stop from happening to you.</p>
                        <p>Fill in the blank spaces below and we will create a personalized website Privacy Policy for your business. No account registration required. Simply generate & download a Privacy Policy in seconds.</p>
                        <p>Small remark when filling in this Privacy Policy generator: Not all parts of this Privacy Policy might be applicable to your website. When there are parts that are not applicable, these can be removed. Optional elements can be selected in step 2. The accuracy of the generated Privacy Policy on this website is not legally binding. Use at your own risk.</p>
                    </div>
                </Card>
            </Container>
        </Fragment>
    );
};

export default Policy;