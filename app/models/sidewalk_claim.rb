class SidewalkClaim < ActiveRecord::Base
  belongs_to :user
  belongs_to :sidewalk, :counter_cache => :claims_count, :foreign_key => 'gid'

  validates_presence_of :user_id, :gid
  
end
