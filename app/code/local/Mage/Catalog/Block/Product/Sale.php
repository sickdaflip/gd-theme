<?php
class Mage_Catalog_Block_Product_Sale extends Mage_Catalog_Block_Product_List{
    protected function _getProductCollection(){
        if (is_null($this->_productCollection)) {

            //store id is store view id
            $storeId = Mage::app()->getStore()->getStoreId();
            $websiteId = Mage::app()->getStore($storeId)->getWebsiteId();

            //customer group id
            $customerGroupId = Mage::app()->getStore()->getGroupId();;

            $product = Mage::getModel('catalog/product');

            $fields = array(
                'final_price',
                'price'
            );
            $collection = $product->setStoreId($storeId)->getResourceCollection()
                ->addAttributeToFilter('price', array('gt' => new Zend_Db_Expr('final_price')))
                ->addFinalPrice()
                ->addAttributeToSelect('*')
                ->addFieldToFilter('visibility', Mage_Catalog_Model_Product_Visibility::VISIBILITY_BOTH);
            $this->_productCollection = $collection;
        }
        return $this->_productCollection;
    }
}
?>